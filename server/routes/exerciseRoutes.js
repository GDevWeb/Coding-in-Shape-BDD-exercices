const express = require('express');
const router = express.Router();
const exerciceController = require('../controllers/exerciseController');
const getExercisesByParam = require('../middleware/paramMiddleware'); 

// Routes :
// 01. Ajouter un exercice :
router.post('/', exerciceController.createExercise);
// 02. Afficher tous les exercices :
router.get('/', exerciceController.getAllExercises);
// 03. Créer une table d'exercices aléatoires:
router.get('/random', exerciceController.getRandomRoutine);
// 04. Afficher un exercice par son id :
router.get('/:id', exerciceController.getExerciseById);
// 05. Modifier un exercice :
router.put('/:id', exerciceController.updateExercise);
// 06. Supprimer un exercice :
router.delete('/:id', exerciceController.deleteExercise);

// 07. Afficher les exercices par type:
// Utilisation du middleware pour les paramètres variables
router.get('/type/:type', getExercisesByParam('type'), (req, res) => {
  res.json(req.exercises);
});
// 08. Afficher les exercices par muscle: 
router.get('/muscle/:muscle', getExercisesByParam('muscle'), (req, res) => {
  res.json(req.exercises);
});

module.exports = router;
