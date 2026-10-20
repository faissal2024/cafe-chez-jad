# Café Chez Jad – Menu numérique
## Local
    npm install && npm run dev   # http://localhost:3000
    npm run lint && npm run build
## Modifier la carte
Éditez `data/menu.ts` (produits, prix, textes FR/AR).
## Déployer (Vercel, gratuit)
1. Poussez le dossier sur GitHub. 2. vercel.com → Add New Project → importez le dépôt → Deploy.
3. Ajoutez un domaine stable (ex. menu.votredomaine.ma) dans Settings → Domains.
## QR code permanent
Une fois l'URL de production confirmée, générez le QR (ex. qrcode-monkey.com ou qr-code-generator.com, mode « URL statique », format SVG/PNG haute résolution), testez-le avec un téléphone, puis imprimez-le. N'utilisez jamais une URL localhost ou de prévisualisation.
