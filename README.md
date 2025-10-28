# Plateforme Interactive - Résultats Élection Présidentielle 2025

## 📋 Description

Plateforme web interactive et moderne pour la consultation des résultats provisoires de l'élection présidentielle de Côte d'Ivoire 2025. Cette application permet aux citoyens de rechercher, filtrer et visualiser les résultats électoraux de manière intuitive et efficace.

## ✨ Fonctionnalités

### 🎯 Fonctionnalités Principales

- **Dashboard Statistique** : Vue d'ensemble des statistiques nationales (inscrits, votants, taux de participation, suffrages exprimés)
- **Résultats par Candidat** : Cartes interactives affichant les résultats de chaque candidat avec pourcentages et graphiques
- **Recherche Dynamique** : Recherche en temps réel par région, département ou commune
- **Filtres Avancés** : 
  - Filtrage par région
  - Tri par taux de participation (croissant/décroissant)
  - Tri par nombre de votants (croissant/décroissant)
- **Tableau Interactif** : Affichage détaillé de tous les résultats avec colonnes fixes pour une navigation facile
- **Visualisations Graphiques** :
  - Graphique en donut de la répartition des voix par candidat
  - Graphique en barres du top 10 des régions par taux de participation
- **Export de Données** : Exportation des résultats filtrés au format CSV
- **Design Responsive** : Interface adaptée à tous les écrans (desktop, tablette, mobile)

### 🎨 Interface Utilisateur

- Design moderne avec dégradés de couleurs
- Animations fluides et transitions élégantes
- Cartes interactives avec effets de survol
- Indicateurs visuels clairs (badges, barres de progression)
- Codes couleur distincts pour chaque candidat
- Mise en évidence du candidat en tête

## 🚀 Installation et Utilisation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation de serveur requise

### Démarrage Rapide

1. **Cloner ou télécharger le projet**
   ```bash
   cd /home/adk/Documents/Devops/CEI
   ```

2. **Ouvrir l'application**
   - Double-cliquez sur le fichier `index.html`
   - Ou ouvrez-le avec votre navigateur préféré
   - Ou utilisez un serveur local :
     ```bash
     # Avec Python 3
     python3 -m http.server 8000
     
     # Avec Node.js (http-server)
     npx http-server
     ```

3. **Accéder à l'application**
   - Si ouvert directement : l'application se charge immédiatement
   - Si serveur local : http://localhost:8000

## 📁 Structure du Projet

```
CEI/
├── index.html          # Page principale de l'application
├── styles.css          # Styles et mise en forme
├── app.js             # Logique applicative et interactions
├── data.js            # Données électorales
└── README.md          # Documentation
```

## 🎯 Guide d'Utilisation

### 1. Consultation du Dashboard

Au chargement, vous verrez :
- Les statistiques nationales en haut
- Les résultats de chaque candidat avec leur pourcentage
- Le candidat en tête est marqué avec un badge "En tête"

### 2. Recherche de Résultats

**Recherche Textuelle** :
- Tapez le nom d'une région, département ou commune dans la barre de recherche
- Les résultats se filtrent automatiquement en temps réel
- Cliquez sur le bouton ❌ pour effacer la recherche

**Filtrage par Région** :
- Sélectionnez une région dans le menu déroulant
- Seuls les résultats de cette région s'afficheront

**Tri des Résultats** :
- Choisissez un critère de tri dans le menu "Trier par"
- Options disponibles : participation, nombre de votants (croissant/décroissant)

### 3. Consultation du Tableau

- Le tableau affiche tous les détails par localisation
- La première colonne (localisation) reste fixe lors du défilement horizontal
- Les lignes sont colorées :
  - **Orange** : Total national
  - **Bleu** : Régions
  - **Blanc/Gris** : Départements et communes
- Survolez une ligne pour la mettre en évidence

### 4. Visualisation des Graphiques

**Graphique des Candidats** :
- Répartition visuelle des voix
- Survolez pour voir les détails (nombre de voix et pourcentage)

**Graphique de Participation** :
- Top 10 des régions avec le meilleur taux de participation
- Comparaison visuelle facile

### 5. Export des Données

- Cliquez sur le bouton "Exporter (CSV)"
- Un fichier CSV sera téléchargé avec les résultats actuellement affichés
- Ouvrez-le avec Excel, Google Sheets ou tout tableur

## 🎨 Candidats

| # | Parti | Candidat | Couleur |
|---|-------|----------|---------|
| 1 | RHDP | ALASSANE OUATTARA | Orange 🟠 |
| 2 | MGC | EHIVET SIMONE epse GBAGBO | Rouge 🔴 |
| 3 | GP-PAIX | LAGOU ADJOUA HENRIETTE | Vert 🟢 |
| 4 | CODE | BILLON JEAN-LOUIS EUGENE | Bleu 🔵 |
| 5 | INDÉPENDANT | DON-MELLO SENIN AHOUA JACOB | Violet 🟣 |

## 🔧 Technologies Utilisées

- **HTML5** : Structure de la page
- **CSS3** : Styles, animations, responsive design
- **JavaScript (Vanilla)** : Logique applicative
- **Chart.js** : Bibliothèque de graphiques
- **Font Awesome** : Icônes

## 📊 Données Incluses

L'application contient les résultats de :
- **Total National**
- **31 Régions** incluant :
  - Régions continentales (Agneby-Tiassa, Bafing, Bagoué, etc.)
  - District Autonome d'Abidjan
  - Diaspora (résultats de 18 pays)
- **Plus de 100 départements et communes**

## 🌐 Compatibilité Navigateurs

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📱 Responsive Design

L'application s'adapte automatiquement à :
- 💻 Ordinateurs de bureau (1920px+)
- 💻 Laptops (1366px - 1920px)
- 📱 Tablettes (768px - 1366px)
- 📱 Smartphones (320px - 768px)

## 🎯 Fonctionnalités Avancées

### Formatage Automatique
- Les nombres sont formatés avec des espaces pour la lisibilité (ex: 8 568 456)
- Les pourcentages affichent 2 décimales
- Les valeurs manquantes sont affichées avec un tiret (-)

### Performance
- Recherche et filtrage instantanés
- Rendu optimisé du tableau
- Animations fluides à 60 FPS
- Chargement rapide des graphiques

### Accessibilité
- Contrastes de couleurs respectant les normes WCAG
- Navigation au clavier possible
- Textes lisibles et hiérarchie claire
- Icônes avec signification visuelle

## 🔄 Mises à Jour Futures Possibles

- [ ] Ajout de plus de régions et départements
- [ ] Graphiques supplémentaires (cartes géographiques)
- [ ] Comparaison entre régions
- [ ] Mode sombre
- [ ] Impression optimisée
- [ ] Partage sur réseaux sociaux
- [ ] API REST pour intégration externe
- [ ] Mise à jour en temps réel via WebSocket

## 📝 Notes Importantes

- Les résultats affichés sont **provisoires**
- Cette plateforme est à but informatif
- Les données sont basées sur les informations fournies par la Commission Électorale
- Pour les résultats officiels définitifs, consultez le site officiel de la CEI

## 👥 Support

Pour toute question ou problème :
- 📧 Email : contact@cei.ci
- 📞 Téléphone : +225 XX XX XX XX XX

## 📄 Licence

© 2025 Commission Électorale de Côte d'Ivoire. Tous droits réservés.

---

**Développé pour la transparence électorale et l'information citoyenne** 🇨🇮
