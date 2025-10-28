#\!/bin/bash

# Script de déploiement automatique sur Hostinger
# Usage: ./deploy.sh

echo "🚀 Déploiement du projet CEI Elections..."

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration (à modifier selon vos paramètres)
FTP_HOST="ftp.votredomaine.com"
FTP_USER="votre_utilisateur_ftp"
FTP_PASS="votre_mot_de_passe"
REMOTE_DIR="/public_html/elections"

echo -e "${BLUE}📦 Préparation des fichiers...${NC}"

# Créer un dossier temporaire pour le déploiement
DEPLOY_DIR="deploy_temp"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

# Copier uniquement les fichiers nécessaires
cp index.html $DEPLOY_DIR/
cp styles.css $DEPLOY_DIR/
cp app.js $DEPLOY_DIR/
cp data.js $DEPLOY_DIR/
cp README.md $DEPLOY_DIR/
cp .htaccess $DEPLOY_DIR/

echo -e "${GREEN}✅ Fichiers préparés${NC}"

echo -e "${BLUE}📤 Upload via FTP...${NC}"

# Option 1 : Upload via lftp (si installé)
if command -v lftp &> /dev/null; then
    lftp -c "
    open -u $FTP_USER,$FTP_PASS $FTP_HOST
    mirror -R $DEPLOY_DIR $REMOTE_DIR
    bye
    "
    echo -e "${GREEN}✅ Upload terminé via lftp${NC}"
else
    echo -e "${RED}⚠️  lftp n'est pas installé${NC}"
    echo -e "${BLUE}📝 Utilisez FileZilla ou le gestionnaire de fichiers Hostinger${NC}"
    echo -e "${BLUE}📁 Fichiers à uploader dans: $DEPLOY_DIR/${NC}"
fi

# Nettoyage
echo -e "${BLUE}🧹 Nettoyage...${NC}"
# rm -rf $DEPLOY_DIR

echo -e "${GREEN}🎉 Déploiement terminé \!${NC}"
echo -e "${BLUE}🌐 Visitez votre site : https://elections.votredomaine.com${NC}"
