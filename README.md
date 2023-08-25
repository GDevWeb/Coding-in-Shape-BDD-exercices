---

# Guide d'Installation et d'Utilisation du Serveur MERN

Ce guide vous expliquera comment installer et lancer le serveur MERN (MongoDB, Express, React, Node.js) pour le projet "Coding in Shape - DB - exercices".

## Étapes d'Installation

1. **Installer Node.js et npm**

   Assurez-vous d'avoir Node.js et npm (Node Package Manager) installés sur votre ordinateur. Vous pouvez les télécharger et les installer depuis [le site officiel de Node.js](https://nodejs.org/).

2. **Télécharger le Code**

   Téléchargez ou clonez le code source du projet à partir du repository GitHub.

3. **Installer les Dépendances**

   Naviguez dans le dossier du projet à l'aide de la ligne de commande (Terminal, Command Prompt) et exécutez la commande suivante pour installer les dépendances :

   ```
   npm install
   ```

## Lancer le Serveur

1. **Démarrer le Serveur**

   Dans le même dossier, exécutez la commande suivante pour démarrer le serveur :

   ```
   npm start
   ```

   Si vous avez installé `nodemon`, vous pouvez également utiliser la commande suivante pour un redémarrage automatique du serveur lors de la modification des fichiers :

   ```
   npm run dev
   ```

2. **Tester le Serveur**

   Vous pouvez utiliser Postman pour tester les différentes fonctionnalités du serveur. Suivez les points suivants pour tester les routes :

   - **Ajouter un exercice** : Envoyez une requête POST à `http://localhost:3000/api/create` avec les détails de l'exercice dans le corps JSON.
   - **Afficher tous les exercices** : Envoyez une requête GET à `http://localhost:3000/api/exercises`.
   - **Afficher un exercice par son ID** : Envoyez une requête GET à `http://localhost:3000/api/exercises/:id` en remplaçant `:id` par l'ID de l'exercice.
   - **Modifier un exercice** : Envoyez une requête PUT à `http://localhost:3000/api/exercises/:id` en remplaçant `:id` par l'ID de l'exercice, avec les détails mis à jour dans le corps JSON.
   - **Supprimer un exercice** : Envoyez une requête DELETE à `http://localhost:3000/api/exercises/:id` en remplaçant `:id` par l'ID de l'exercice.

3. **Arrêter le Serveur**

   Pour arrêter le serveur, revenez à la ligne de commande et appuyez sur `Ctrl + C`.

---
