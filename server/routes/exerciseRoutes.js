const express = require('express');
const router = express.Router();
const exerciceController = require('../controllers/exerciceController');
const getExercisesByParam = require('../middleware/paramMiddleware');
const getRandomRoutine = require('../controllers/getRandomRoutineV2');

// Routes :
// 01. Ajouter un exercice :
router.post('/', exerciceController.createExercise);
// 02. Afficher tous les exercices :
router.get('/', exerciceController.getAllExercises);
// 08. Créer une table d'exercices aléatoires:
router.get('/random', getRandomRoutine);
// router.get('/random', exerciceController.getRandomRoutine);
// 03. Afficher un exercice par son id :
router.get('/:id', exerciceController.getExerciseById);
// 04. Modifier un exercice :
router.put('/:id', exerciceController.updateExercise);
// 05. Supprimer un exercice :
router.delete('/:id', exerciceController.deleteExercise);

// 06. Afficher les exercices par type:
// Utilisation du middleware pour les paramètres variables
router.get('/type/:type', getExercisesByParam('type'), (req, res) => {
  res.json(req.exercises);
});

// 07. Afficher les exercices par muscle: 
router.get('/muscle/:muscle', getExercisesByParam('muscle'), (req, res) => {
  res.json(req.exercises);
});

module.exports = router;
