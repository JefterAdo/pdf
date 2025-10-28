#!/usr/bin/env python3
"""
Script pour corriger les données électorales du site en utilisant Qdrant
"""

from qdrant_client import QdrantClient
from cohere import Client as CohereClient
import json
import re
import os
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

# Configuration
QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
COLLECTION_NAME = os.getenv("COLLECTION_NAME", "cei-vector")
COHERE_API_KEY = os.getenv("COHERE_API_KEY")

# Initialisation des clients
qdrant_client = QdrantClient(url=QDRANT_URL)
cohere_client = CohereClient(api_key=COHERE_API_KEY)

def get_embedding(text):
    """Génère un embedding pour le texte donné"""
    response = cohere_client.embed(
        texts=[text],
        model="embed-multilingual-v3.0",
        input_type="search_query"
    )
    return response.embeddings[0]

def search_qdrant(query, limit=10):
    """Recherche dans Qdrant avec une requête"""
    query_vector = get_embedding(query)
    results = qdrant_client.search(
        collection_name=COLLECTION_NAME,
        query_vector=query_vector,
        limit=limit
    )
    return results

def extract_region_data(region_name):
    """Extrait les données d'une région depuis Qdrant"""
    print(f"\n🔍 Recherche des données pour: {region_name}")
    
    # Recherche des données de la région
    query = f"résultats électoraux région {region_name} 2025 Côte d'Ivoire"
    results = search_qdrant(query, limit=5)
    
    region_data = {
        "location": region_name,
        "type": "region",
        "data_found": False,
        "raw_results": []
    }
    
    for i, result in enumerate(results, 1):
        text = result.payload.get('text', '')
        score = result.score
        
        print(f"\n  {i}. Score: {score:.4f}")
        print(f"     Extrait: {text[:150]}...")
        
        region_data["raw_results"].append({
            "score": score,
            "text": text
        })
        
        # Extraction des données numériques
        if score > 0.7:  # Seuil de confiance
            region_data["data_found"] = True
            # Ici on peut extraire les chiffres avec regex
            # Exemple: extraire nombre de votants, inscrits, etc.
    
    return region_data

def extract_all_regions():
    """Extrait les données de toutes les régions"""
    regions = [
        "AGNEBY-TIASSA", "BAFING", "BAGOUE", "BELIER", "BERE", "BOUNKANI",
        "CAVALLY", "GBEKE", "DIASPORA", "D.A. ABIDJAN", "PORO", "TONKPI",
        "KABADOUGOU", "LA ME", "LOH-DJIBOUA", "MARAHOUE", "MORONOU", "NAWA",
        "N'ZI", "SAN-PEDRO", "SUD-COMOE", "TCHOLOGO", "WORODOUGOU",
        "D.A. YAMOUSSOUKRO", "FOLON", "GBOKLÉ", "GOH", "GONTOUGO",
        "GRANDS-PONTS", "GUEMON", "HAMBOL", "HAUT-SASSANDRA", "IFFOU",
        "INDENIE-DJUABLIN"
    ]
    
    all_data = {}
    
    for region in regions:
        region_data = extract_region_data(region)
        all_data[region] = region_data
    
    return all_data

def get_total_national():
    """Récupère le total national depuis Qdrant"""
    print("\n📊 Recherche du TOTAL NATIONAL")
    
    query = "total national résultats électoraux présidentielle 2025 Côte d'Ivoire inscrits votants"
    results = search_qdrant(query, limit=5)
    
    national_data = {
        "data_found": False,
        "raw_results": []
    }
    
    for i, result in enumerate(results, 1):
        text = result.payload.get('text', '')
        score = result.score
        
        print(f"\n  {i}. Score: {score:.4f}")
        print(f"     Extrait: {text[:200]}...")
        
        national_data["raw_results"].append({
            "score": score,
            "text": text
        })
        
        if score > 0.75:
            national_data["data_found"] = True
    
    return national_data

def parse_electoral_data(text):
    """Parse les données électorales d'un texte"""
    data = {}
    
    # Patterns regex pour extraire les données
    patterns = {
        'inscrits': r'INSCRITS[:\s]+(\d[\d\s]+)',
        'votants': r'VOTANTS[:\s]+(\d[\d\s]+)',
        'participation': r'PARTICIPATION[:\s]+([\d,]+)%',
        'rhdp': r'RHDP[:\s]+(\d[\d\s]+)',
        'mgc': r'MGC[:\s]+(\d[\d\s]+)',
        'gp_paix': r'GP-PAIX[:\s]+(\d[\d\s]+)',
        'code': r'CODE[:\s]+(\d[\d\s]+)',
        'independant': r'IND[ÉE]PENDANT[:\s]+(\d[\d\s]+)'
    }
    
    for key, pattern in patterns.items():
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            value = match.group(1).replace(' ', '').replace('\xa0', '')
            try:
                data[key] = int(value) if ',' not in value else float(value.replace(',', '.'))
            except:
                data[key] = value
    
    return data

def generate_corrected_data_js(all_data, national_data):
    """Génère le fichier data.js corrigé"""
    print("\n✍️  Génération du fichier data.js corrigé...")
    
    # Structure de base
    corrected_data = {
        "totalNational": {},
        "regions": []
    }
    
    # Parser le total national
    if national_data["data_found"]:
        for result in national_data["raw_results"]:
            if result["score"] > 0.75:
                parsed = parse_electoral_data(result["text"])
                if parsed:
                    corrected_data["totalNational"] = parsed
                    break
    
    # Parser les régions
    for region_name, region_info in all_data.items():
        if region_info["data_found"]:
            for result in region_info["raw_results"]:
                if result["score"] > 0.7:
                    parsed = parse_electoral_data(result["text"])
                    if parsed:
                        parsed["location"] = region_name
                        parsed["type"] = "region"
                        corrected_data["regions"].append(parsed)
                        break
    
    # Sauvegarder en JSON pour inspection
    with open('/home/adk/Documents/Devops/CEI/corrected_data.json', 'w', encoding='utf-8') as f:
        json.dump(corrected_data, f, indent=2, ensure_ascii=False)
    
    print("✅ Données corrigées sauvegardées dans corrected_data.json")
    return corrected_data

def main():
    """Fonction principale"""
    print("=" * 60)
    print("🔧 CORRECTION DES DONNÉES ÉLECTORALES AVEC QDRANT")
    print("=" * 60)
    
    # Vérifier la connexion à Qdrant
    try:
        collections = qdrant_client.get_collections()
        print(f"\n✅ Connecté à Qdrant")
        print(f"   Collections: {[col.name for col in collections.collections]}")
        
        collection_info = qdrant_client.get_collection(COLLECTION_NAME)
        print(f"\n📚 Collection '{COLLECTION_NAME}':")
        print(f"   Points: {collection_info.points_count}")
        print(f"   Dimension: {collection_info.config.params.vectors.size}")
    except Exception as e:
        print(f"\n❌ Erreur de connexion à Qdrant: {e}")
        return
    
    # Récupérer le total national
    national_data = get_total_national()
    
    # Récupérer les données de toutes les régions
    print("\n" + "=" * 60)
    print("📍 EXTRACTION DES DONNÉES RÉGIONALES")
    print("=" * 60)
    all_data = extract_all_regions()
    
    # Générer le fichier corrigé
    print("\n" + "=" * 60)
    print("💾 GÉNÉRATION DES DONNÉES CORRIGÉES")
    print("=" * 60)
    corrected_data = generate_corrected_data_js(all_data, national_data)
    
    print("\n" + "=" * 60)
    print("✅ PROCESSUS TERMINÉ")
    print("=" * 60)
    print("\n📄 Fichier généré: corrected_data.json")
    print("   Vous pouvez maintenant l'utiliser pour mettre à jour data.js")

if __name__ == "__main__":
    main()
