```markdown
# Guide d'Installation et d'Utilisation de l'Application Backend

Ce guide vous aidera à installer, configurer et utiliser l'application backend pour le projet "Coding in Shape".

## Étapes d'Installation

### 1. Cloner le Répertoire

Clonez le répertoire GitHub du projet sur votre ordinateur.

```bash
git clone https://github.com/votre-utilisateur/coding-in-shape-backend.git
```

### 2. Installer les Dépendances

Accédez au répertoire du projet et installez les dépendances en exécutant la commande suivante :

```bash
cd coding-in-shape-backend
npm install
```

### 3. Configuration de la Base de Données

Dans le fichier `.env`, configurez les variables d'environnement suivantes :

```dotenv
PORT=3000
DB_URI=mongodb://localhost:27017/my-exercises-db
```

Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine.

### 4. Démarrer le Serveur

Lancez le serveur en exécutant la commande suivante :

```bash
npm start
```

Le serveur sera disponible à l'adresse http://localhost:3000.

## Utilisation de l'API

L'application backend expose une API permettant de gérer les exercices.

### Endpoints Disponibles

- `POST /api/exercises/create`: Créer un nouvel exercice.
- `GET /api/exercises/exercises`: Obtenir la liste de tous les exercices.
- `GET /api/exercises/exercises/:id`: Obtenir un exercice par son ID.
- `PUT /api/exercises/exercises/:id`: Mettre à jour un exercice existant.
- `DELETE /api/exercises/exercises/:id`: Supprimer un exercice.
- `GET /api/exercises/exercises/type/:type`: Obtenir la liste d'exercices par type.
- `GET /api/exercises/random`: Obtenir une routine d'exercices aléatoires.

### Exemple d'Objet à Ajouter via Postman

```json
{
    "name": "Exercice de Test",
    "description": "Ceci est un exercice de test.",
    "image": "url_de_l_image",
    "video": "url_de_la_video",
    "type": "Upper Body",
    "muscle": "Chest"
}
```

## Dépannage

Si vous rencontrez des problèmes lors de l'installation ou de l'utilisation de l'application, n'hésitez pas à demander de l'aide à un collègue ou à votre responsable technique.

Profitez de l'apprentissage et n'ayez pas peur de poser des questions !
```
