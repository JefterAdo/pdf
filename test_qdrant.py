#!/usr/bin/env python3
"""
Script de test pour explorer les données dans Qdrant
"""

from qdrant_client import QdrantClient
import json

# Configuration
QDRANT_URL = "http://localhost:6333"
COLLECTION_NAME = "cei-vector"

# Connexion
client = QdrantClient(url=QDRANT_URL)

print("=" * 60)
print("🔍 EXPLORATION DES DONNÉES QDRANT")
print("=" * 60)

# 1. Lister les collections
try:
    collections = client.get_collections()
    print("\n📚 Collections disponibles:")
    for col in collections.collections:
        print(f"   - {col.name}")
except Exception as e:
    print(f"\n❌ Erreur: {e}")
    exit(1)

# 2. Obtenir les infos de la collection
try:
    collection_info = client.get_collection(COLLECTION_NAME)
    print(f"\n📊 Collection '{COLLECTION_NAME}':")
    print(f"   Points: {collection_info.points_count}")
    print(f"   Dimension: {collection_info.config.params.vectors.size}")
except Exception as e:
    print(f"\n❌ Collection non trouvée: {e}")
    exit(1)

# 3. Récupérer quelques points pour voir la structure
print("\n📄 Exemples de données (premiers 5 points):")
try:
    # Scroll pour récupérer les premiers points
    points, next_offset = client.scroll(
        collection_name=COLLECTION_NAME,
        limit=5,
        with_payload=True,
        with_vectors=False
    )
    
    for i, point in enumerate(points, 1):
        print(f"\n--- Point {i} (ID: {point.id}) ---")
        payload = point.payload
        
        # Afficher les clés disponibles
        print(f"Clés: {list(payload.keys())}")
        
        # Afficher le texte (tronqué)
        if 'text' in payload:
            text = payload['text']
            print(f"Texte: {text[:200]}...")
        
        # Afficher les métadonnées
        for key, value in payload.items():
            if key != 'text':
                print(f"{key}: {value}")
        
        print("-" * 60)
    
    # Sauvegarder un exemple complet
    if points:
        with open('/home/adk/Documents/Devops/CEI/qdrant_sample.json', 'w', encoding='utf-8') as f:
            sample_data = {
                "point_id": str(points[0].id),
                "payload": points[0].payload
            }
            json.dump(sample_data, f, indent=2, ensure_ascii=False)
        print("\n✅ Exemple sauvegardé dans qdrant_sample.json")

except Exception as e:
    print(f"\n❌ Erreur lors de la récupération: {e}")

print("\n" + "=" * 60)
print("✅ EXPLORATION TERMINÉE")
print("=" * 60)
