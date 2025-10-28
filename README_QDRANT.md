# 🔧 Correction des Données avec Qdrant

Ce guide explique comment utiliser Qdrant pour corriger automatiquement les données électorales du site.

## 📋 Prérequis

1. **Qdrant** installé et en cours d'exécution sur `http://localhost:6333`
2. **Python 3.7+** installé
3. **pip** (gestionnaire de paquets Python)

## 🚀 Installation

### 1. Installer pip (si nécessaire)
```bash
sudo apt install python3-pip
```

### 2. Installer les dépendances Python
```bash
cd /home/adk/Documents/Devops/CEI
pip install -r requirements.txt
```

Ou manuellement :
```bash
pip install qdrant-client cohere python-dotenv
```

### 3. Configuration

Créez un fichier `.env` à partir de `.env.example` :
```bash
cp .env.example .env
```

Éditez `.env` et ajoutez votre clé API Cohere :
```env
QDRANT_URL=http://localhost:6333
COLLECTION_NAME=cei-vector
COHERE_API_KEY=votre_cle_api_cohere
```

## 🔍 Utilisation

### Étape 1 : Tester la connexion à Qdrant

```bash
python3 test_qdrant.py
```

Ce script va :
- ✅ Vérifier la connexion à Qdrant
- 📚 Lister les collections disponibles
- 📊 Afficher les informations de la collection `cei-vector`
- 📄 Récupérer et afficher 5 exemples de données
- 💾 Sauvegarder un exemple dans `qdrant_sample.json`

### Étape 2 : Extraire et corriger les données

```bash
python3 correct_data_from_qdrant.py
```

Ce script va :
- 🔍 Rechercher le total national dans Qdrant
- 📍 Extraire les données de toutes les 31 régions
- 🧮 Parser les données numériques (inscrits, votants, résultats par candidat)
- 💾 Générer un fichier `corrected_data.json` avec les données corrigées

### Étape 3 : Appliquer les corrections

Une fois `corrected_data.json` généré, vous pouvez :

1. **Vérifier les données** :
```bash
cat corrected_data.json | jq
```

2. **Appliquer manuellement** les corrections dans `data.js`

Ou créer un script automatique pour mettre à jour `data.js`.

## 📁 Fichiers créés

- **`test_qdrant.py`** : Script de test et exploration
- **`correct_data_from_qdrant.py`** : Script principal de correction
- **`requirements.txt`** : Dépendances Python
- **`.env.example`** : Exemple de configuration
- **`qdrant_sample.json`** : Exemple de données (généré)
- **`corrected_data.json`** : Données corrigées (généré)

## 🔧 Fonctionnement

### 1. Embeddings avec Cohere
Le script utilise Cohere pour générer des embeddings des requêtes :
```python
query = "résultats électoraux région AGNEBY-TIASSA 2025"
embedding = cohere.embed(texts=[query], model="embed-multilingual-v3.0")
```

### 2. Recherche vectorielle dans Qdrant
```python
results = qdrant_client.search(
    collection_name="cei-vector",
    query_vector=embedding,
    limit=5
)
```

### 3. Extraction des données
Le script utilise des regex pour extraire :
- Nombre d'inscrits
- Nombre de votants
- Taux de participation
- Résultats par candidat (RHDP, MGC, GP-PAIX, CODE, INDÉPENDANT)

### 4. Génération du fichier corrigé
Les données sont sauvegardées en JSON pour inspection et utilisation.

## 🎯 Exemples de requêtes

Le script effectue automatiquement ces types de requêtes :

```python
# Total national
"total national résultats électoraux présidentielle 2025 Côte d'Ivoire"

# Région spécifique
"résultats électoraux région AGNEBY-TIASSA 2025 Côte d'Ivoire"

# Département
"résultats électoraux département AGBOVILLE 2025"
```

## ⚙️ Personnalisation

### Modifier le seuil de confiance
Dans `correct_data_from_qdrant.py`, ligne ~50 :
```python
if score > 0.7:  # Seuil de confiance (0.0 à 1.0)
```

### Ajouter des patterns d'extraction
Dans la fonction `parse_electoral_data()` :
```python
patterns = {
    'votre_champ': r'PATTERN_REGEX[:\s]+(\d+)',
    # ...
}
```

## 🐛 Dépannage

### Erreur : "Connection refused"
- Vérifiez que Qdrant est en cours d'exécution : `curl http://localhost:6333/collections`

### Erreur : "Collection not found"
- Vérifiez le nom de la collection dans `.env`
- Listez les collections : `python3 test_qdrant.py`

### Erreur : "Invalid API key"
- Vérifiez votre clé Cohere dans `.env`
- Obtenez une clé sur : https://cohere.com/

## 📊 Structure des données Qdrant

Les données dans Qdrant doivent avoir cette structure :
```json
{
  "id": "unique_id",
  "vector": [0.1, 0.2, ...],
  "payload": {
    "text": "Texte contenant les résultats électoraux...",
    "region": "AGNEBY-TIASSA",
    "type": "region",
    "metadata": {...}
  }
}
```

## 📞 Support

Pour toute question ou problème :
1. Vérifiez que Qdrant fonctionne
2. Testez avec `test_qdrant.py`
3. Consultez les logs d'erreur
4. Vérifiez la structure des données dans `qdrant_sample.json`

## 🎉 Résultat attendu

Après exécution, vous obtiendrez un fichier `corrected_data.json` contenant :
```json
{
  "totalNational": {
    "inscrits": 8568456,
    "votants": 4292474,
    "participation": 50.10,
    "rhdp": 3759030,
    "mgc": 101238,
    ...
  },
  "regions": [
    {
      "location": "AGNEBY-TIASSA",
      "type": "region",
      "inscrits": 256319,
      ...
    }
  ]
}
```

Vous pourrez ensuite utiliser ces données pour mettre à jour `data.js` automatiquement ou manuellement.
