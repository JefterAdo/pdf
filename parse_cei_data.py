#!/usr/bin/env python3
"""
Script pour parser intelligemment les données CEI depuis le contenu brut
"""

import re
import json

# Lire le contenu brut
with open('/home/adk/Documents/Devops/CEI/raw_content.txt', 'r', encoding='utf-8') as f:
    content = f.read()

print("=" * 60)
print("🔍 PARSING INTELLIGENT DES DONNÉES CEI")
print("=" * 60)

# Fonction pour nettoyer et extraire les nombres
def extract_numbers(text):
    """Extrait tous les nombres d'une chaîne"""
    # Remplacer les espaces dans les nombres
    numbers = re.findall(r'\d[\d\s]*', text)
    return [int(n.replace(' ', '')) for n in numbers if n.strip()]

# Fonction pour parser une ligne de données
def parse_data_line(line):
    """Parse une ligne avec format: NOM CHIFFRES..."""
    # Extraire le nom (lettres, espaces, tirets, apostrophes au début)
    name_match = re.match(r'^([A-ZÀ-Ü\s\'-\.]+?)(\d|$)', line)
    if not name_match:
        return None
    
    name = name_match.group(1).strip()
    
    # Extraire tous les nombres de la ligne
    numbers = extract_numbers(line)
    
    if len(numbers) < 10:  # Pas assez de données
        return None
    
    # Structure attendue: NB_BV, INSCRITS, PERS_ASTREINTE, VOTANTS, TAUX%, BULLETINS_NULS, SUFFRAGES, BULLETINS_BLANCS, RHDP, MGC, GP-PAIX, CODE, INDEPENDANT
    # Mais le taux est souvent collé avec d'autres chiffres
    
    return {
        'location': name,
        'numbers': numbers,
        'raw_line': line
    }

# Extraire toutes les lignes de données
print("\n📋 Extraction des lignes de données...")
lines = content.split('\n')
data_lines = []

for line in lines:
    if not line.strip():
        continue
    
    # Ignorer les headers et lignes spéciales
    if any(keyword in line for keyword in ['CANDIDATS', 'SCRUTIN', 'RESULTAT', 'REGION /', 'Page ', '====', 'POINT']):
        continue
    
    parsed = parse_data_line(line)
    if parsed and len(parsed['numbers']) >= 10:
        data_lines.append(parsed)

print(f"✅ {len(data_lines)} lignes de données extraites")

# Identifier les régions et le total national
print("\n🗺️  Identification des régions...")
regions_data = {}
total_national = None

# Liste des régions connues
known_regions = [
    "AGNEBY-TIASSA", "BAFING", "BAGOUE", "BELIER", "BERE", "BOUNKANI",
    "CAVALLY", "GBEKE", "DIASPORA", "PORO", "TONKPI",
    "KABADOUGOU", "LA ME", "LOH-DJIBOUA", "MARAHOUE", "MORONOU", "NAWA",
    "N'ZI", "SAN-PEDRO", "SUD-COMOE", "TCHOLOGO", "WORODOUGOU",
    "FOLON", "GBOKLE", "GBOKLÉ", "GOH", "GONTOUGO",
    "GRANDS-PONTS", "GRANDS PONTS", "GUEMON", "HAMBOL", "HAUT-SASSANDRA", "HAUT- SASSANDRA", "IFFOU",
    "INDENIE-DJUABLIN"
]

for line_data in data_lines:
    location = line_data['location']
    
    # Vérifier si c'est une région connue
    location_clean = location.replace('-', ' ').replace('  ', ' ').strip()
    
    is_region = False
    for region in known_regions:
        region_clean = region.replace('-', ' ').replace('  ', ' ').strip()
        if location_clean.upper() == region_clean.upper():
            is_region = True
            regions_data[region] = line_data
            break
    
    # Vérifier si c'est le total national
    if 'TOTAL' in location.upper() or location.strip() == '':
        # Chercher une ligne avec beaucoup de chiffres
        if len(line_data['numbers']) >= 13:
            total_national = line_data

print(f"✅ {len(regions_data)} régions identifiées")
if total_national:
    print(f"✅ Total national trouvé")

# Afficher les régions trouvées
if regions_data:
    print(f"\n📍 Régions identifiées:")
    for i, region in enumerate(sorted(regions_data.keys()), 1):
        nums = regions_data[region]['numbers']
        print(f"   {i:2d}. {region:25s} - {len(nums)} chiffres")

# Sauvegarder les données parsées
output = {
    'total_national': total_national,
    'regions': regions_data,
    'all_lines': data_lines[:50]  # Garder les 50 premières lignes pour inspection
}

with open('/home/adk/Documents/Devops/CEI/parsed_cei_data.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"\n💾 Données parsées sauvegardées dans: parsed_cei_data.json")

# Créer un rapport lisible
with open('/home/adk/Documents/Devops/CEI/rapport_parsing.txt', 'w', encoding='utf-8') as f:
    f.write("RAPPORT DE PARSING DES DONNÉES CEI\n")
    f.write("=" * 60 + "\n\n")
    
    if total_national:
        f.write("TOTAL NATIONAL:\n")
        f.write(f"  Chiffres: {total_national['numbers']}\n")
        f.write(f"  Ligne brute: {total_national['raw_line'][:100]}...\n\n")
    
    f.write(f"\nRÉGIONS ({len(regions_data)}):\n")
    f.write("-" * 60 + "\n")
    for region, data in sorted(regions_data.items()):
        f.write(f"\n{region}:\n")
        f.write(f"  Chiffres ({len(data['numbers'])}): {data['numbers']}\n")
        f.write(f"  Ligne: {data['raw_line'][:80]}...\n")

print(f"📄 Rapport lisible sauvegardé dans: rapport_parsing.txt")

print("\n" + "=" * 60)
print("✅ PARSING TERMINÉ")
print("=" * 60)
