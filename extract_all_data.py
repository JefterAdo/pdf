#!/usr/bin/env python3
"""
Script pour extraire TOUTES les données de Qdrant et les parser
"""

from qdrant_client import QdrantClient
import json
import re
from dotenv import load_dotenv
import os

# Charger les variables d'environnement
load_dotenv()

# Configuration
QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
COLLECTION_NAME = os.getenv("COLLECTION_NAME", "cei-vector")

# Connexion
client = QdrantClient(url=QDRANT_URL)

print("=" * 60)
print("📊 EXTRACTION COMPLÈTE DES DONNÉES QDRANT")
print("=" * 60)

# Récupérer TOUS les points
print("\n🔄 Récupération de tous les points...")
all_points = []
offset = None

while True:
    points, next_offset = client.scroll(
        collection_name=COLLECTION_NAME,
        limit=100,
        offset=offset,
        with_payload=True,
        with_vectors=False
    )
    
    all_points.extend(points)
    
    if next_offset is None:
        break
    
    offset = next_offset
    print(f"   Récupéré {len(all_points)} points...")

print(f"\n✅ Total de {len(all_points)} points récupérés")

# Fonction pour parser les données électorales
def parse_electoral_line(text):
    """Parse une ligne de données électorales"""
    # Pattern pour capturer les données d'une ligne
    # Format: REGION NB_BV INSCRITS PERS_ASTREINTE VOTANTS TAUX% BULLETINS_NULS SUFFRAGES BULLETINS_BLANCS RHDP MGC GP-PAIX CODE INDEPENDANT
    
    lines = text.split('\n')
    data_lines = []
    
    for line in lines:
        # Ignorer les lignes vides et les headers
        if not line.strip() or 'CANDIDATS' in line or 'SCRUTIN' in line:
            continue
            
        # Extraire les nombres de la ligne
        numbers = re.findall(r'\d[\d\s,]*', line)
        if len(numbers) >= 10:  # Au moins 10 chiffres pour une ligne valide
            # Extraire le nom de la localisation (première partie avant les chiffres)
            location_match = re.match(r'^([A-ZÀ-Ü\s\'-\.]+)', line)
            if location_match:
                location = location_match.group(1).strip()
                data_lines.append({
                    'location': location,
                    'raw_numbers': [n.replace(' ', '').replace(',', '.') for n in numbers],
                    'raw_line': line
                })
    
    return data_lines

# Extraire et organiser les données
print("\n📋 Parsing des données...")
all_data = {
    'total_national': None,
    'regions': {},
    'raw_content': []
}

for point in all_points:
    content = point.payload.get('content', '')
    
    # Sauvegarder le contenu brut
    all_data['raw_content'].append({
        'id': str(point.id),
        'content': content[:500]  # Premiers 500 caractères
    })
    
    # Parser les lignes
    parsed_lines = parse_electoral_line(content)
    
    for line_data in parsed_lines:
        location = line_data['location']
        
        # Identifier si c'est le total national
        if 'TOTAL' in location and 'NATIONAL' in location:
            all_data['total_national'] = line_data
        # Identifier les régions (en majuscules, pas de chiffres)
        elif location.isupper() and len(location) > 3:
            if location not in all_data['regions']:
                all_data['regions'][location] = {
                    'data': line_data,
                    'departements': []
                }

print(f"\n✅ Parsing terminé:")
print(f"   - Total national: {'Trouvé' if all_data['total_national'] else 'Non trouvé'}")
print(f"   - Régions identifiées: {len(all_data['regions'])}")
print(f"   - Contenu brut sauvegardé: {len(all_data['raw_content'])} extraits")

# Afficher les régions trouvées
if all_data['regions']:
    print(f"\n📍 Régions identifiées:")
    for i, region in enumerate(sorted(all_data['regions'].keys()), 1):
        print(f"   {i:2d}. {region}")

# Sauvegarder les données
output_file = '/home/adk/Documents/Devops/CEI/extracted_data.json'
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(all_data, f, indent=2, ensure_ascii=False)

print(f"\n💾 Données sauvegardées dans: extracted_data.json")

# Créer aussi un fichier avec juste le contenu brut pour inspection manuelle
raw_output = '/home/adk/Documents/Devops/CEI/raw_content.txt'
with open(raw_output, 'w', encoding='utf-8') as f:
    for i, point in enumerate(all_points, 1):
        f.write(f"\n{'='*60}\n")
        f.write(f"POINT {i} (ID: {point.id})\n")
        f.write(f"{'='*60}\n")
        f.write(point.payload.get('content', ''))
        f.write(f"\n\n")

print(f"📄 Contenu brut sauvegardé dans: raw_content.txt")

print("\n" + "=" * 60)
print("✅ EXTRACTION TERMINÉE")
print("=" * 60)
print("\n📝 Prochaines étapes:")
print("   1. Consultez extracted_data.json pour voir les données parsées")
print("   2. Consultez raw_content.txt pour voir le contenu brut")
print("   3. Utilisez ces données pour corriger data.js")
