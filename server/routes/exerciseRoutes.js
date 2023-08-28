const express = require('express');
const router = express.Router();
const exerciceController = require('../controllers/exerciseController');
const authMiddleWare = require('../middleware/authMiddleWare');
const getExercisesByParam = require('../middleware/paramMiddleware'); 

// Routes :
// 01.a Ajouter un exercice :
// router.post('/', exerciceController.createExercise);
// 01.b Ajouter un exercice protéger une route avec le middleware :
router.post('/', authMiddleWare, exerciceController.createExercise);

// 02.a Route getAllExercises protégée avec le middleware : 
router.get('/', authMiddleWare, exerciceController.getAllExercises);
// 02.b Afficher tous les exercices :
// router.get('/', exerciceController.getAllExercises);

// 03.a Route random protégée avec le middleware - Créer une table d'exercices aléatoires:
router.get('/random', authMiddleWare, exerciceController.getRandomRoutine);
// 03.b Créer une table d'exercices aléatoires:
// router.get('/random', exerciceController.getRandomRoutine);

// 04.a Afficher un exercice par son id :
router.get('/:id', authMiddleWare, exerciceController.getExerciseById)
// 04.b Afficher un exercice par son id :
// router.get('/:id', exerciceController.getExerciseById);

// 05.a Modifier un exercice :
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
