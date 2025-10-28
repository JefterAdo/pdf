# 🚀 Guide de Déploiement sur Hostinger

## Prérequis
- Compte Hostinger Cloud Startup
- Accès au panneau de contrôle (hPanel)
- Nom de sous-domaine choisi (ex: elections.votredomaine.com)

## Étape 1 : Créer le sous-domaine

1. Connectez-vous à votre **hPanel Hostinger**
2. Allez dans **Domaines** → **Sous-domaines**
3. Cliquez sur **Créer un sous-domaine**
4. Entrez le nom (ex: `elections`)
5. Choisissez le domaine principal
6. Cliquez sur **Créer**

## Étape 2 : Accéder au gestionnaire de fichiers

1. Dans hPanel, allez dans **Fichiers** → **Gestionnaire de fichiers**
2. Naviguez vers le dossier de votre sous-domaine
   - Généralement : `/public_html/elections/` ou `/domains/elections.votredomaine.com/public_html/`

## Étape 3 : Uploader les fichiers

### Option A : Via le Gestionnaire de fichiers (Interface web)

1. Dans le gestionnaire de fichiers, cliquez sur **Téléverser**
2. Sélectionnez tous les fichiers du projet :
   - index.html
   - styles.css
   - app.js
   - data.js
   - README.md
   - .htaccess
3. Attendez la fin du téléversement

### Option B : Via FTP (Recommandé pour gros fichiers)

1. Dans hPanel, allez dans **Fichiers** → **Comptes FTP**
2. Créez un compte FTP ou utilisez celui existant
3. Notez les informations :
   - Hôte FTP : ftp.votredomaine.com
   - Utilisateur : votre_utilisateur_ftp
   - Mot de passe : votre_mot_de_passe
   - Port : 21

4. Utilisez FileZilla ou un client FTP :
   ```
   Hôte : ftp.votredomaine.com
   Utilisateur : votre_utilisateur_ftp
   Mot de passe : ********
   Port : 21
   ```

5. Uploadez tous les fichiers dans le dossier du sous-domaine

### Option C : Via Git (Recommandé - Automatique)

1. Connectez-vous en SSH à votre serveur Hostinger
2. Naviguez vers le dossier du sous-domaine :
   ```bash
   cd /home/votreuser/public_html/elections/
   ```

3. Clonez le repository GitHub :
   ```bash
   git clone https://github.com/JefterAdo/pdf.git .
   ```

4. Pour les futures mises à jour :
   ```bash
   cd /home/votreuser/public_html/elections/
   git pull origin main
   ```

## Étape 4 : Vérifier les permissions

1. Dans le gestionnaire de fichiers, sélectionnez tous les fichiers
2. Clic droit → **Permissions**
3. Définissez :
   - Fichiers : 644
   - Dossiers : 755

## Étape 5 : Configurer SSL (HTTPS)

1. Dans hPanel, allez dans **Sécurité** → **SSL**
2. Trouvez votre sous-domaine
3. Cliquez sur **Installer SSL** (gratuit avec Let's Encrypt)
4. Attendez quelques minutes pour l'activation

## Étape 6 : Tester le site

1. Ouvrez votre navigateur
2. Accédez à : `https://elections.votredomaine.com`
3. Vérifiez que tout fonctionne correctement

## 🔄 Mise à jour du site

### Via Git (automatique) :
```bash
ssh votre_user@votredomaine.com
cd /home/votreuser/public_html/elections/
git pull origin main
```

### Via FTP :
1. Connectez-vous avec FileZilla
2. Remplacez les fichiers modifiés

### Via Gestionnaire de fichiers :
1. Supprimez les anciens fichiers
2. Uploadez les nouveaux

## 📊 Optimisations supplémentaires

### Activer la compression Brotli (si disponible)
Ajoutez dans `.htaccess` :
```apache
<IfModule mod_brotli.c>
    AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Configurer le cache navigateur
Déjà inclus dans le `.htaccess` fourni

### Minifier les fichiers (optionnel)
Pour de meilleures performances, vous pouvez minifier :
- styles.css → styles.min.css
- app.js → app.min.js

## 🆘 Dépannage

### Le site n'affiche pas les données
- Vérifiez que `data.js` est bien uploadé
- Vérifiez les permissions (644)
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Erreur 404
- Vérifiez que `index.html` est dans le bon dossier
- Vérifiez les permissions

### Le CSS ne s'applique pas
- Videz le cache du navigateur (Ctrl+F5)
- Vérifiez que `styles.css` est bien uploadé
- Vérifiez le chemin dans `index.html`

### SSL ne fonctionne pas
- Attendez 15-30 minutes après l'installation
- Videz le cache DNS : `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

## 📞 Support

- Support Hostinger : https://www.hostinger.fr/contact
- Documentation : https://support.hostinger.com/

## ✅ Checklist finale

- [ ] Sous-domaine créé
- [ ] Fichiers uploadés
- [ ] Permissions configurées (644/755)
- [ ] SSL activé
- [ ] Site accessible en HTTPS
- [ ] Données affichées correctement
- [ ] Graphiques fonctionnels
- [ ] Tableau défilable
- [ ] Responsive sur mobile

🎉 Votre site est maintenant en ligne \!
