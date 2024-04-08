FROM node:20

WORKDIR /app

# Copier les fichiers de package.json et package-lock.json pour installer les dépendances
COPY package.json .
COPY package-lock.json .

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exécuter la construction de l'application
RUN npm run build

# Exposer le port 5000 pour le serveur HTTP
EXPOSE 5000

# Lancer le serveur HTTP une fois la construction terminée
CMD ["npx", "http-server", "-p", "5000", "build"]
