const express = require('express');
const router = express.Router();
const exerciceController = require('../controllers/exerciseController');
const authMiddleWare = require('../middleware/authMiddleWare');
const getExercisesByParam = require('../middleware/paramMiddleware'); 

// Routes :
// 01. Ajouter un exercice - Create Exercise:
router.post('/', authMiddleWare, exerciceController.createExercise);
// router.post('/', exerciceController.createExercise);

// 02.a Route getAllExercises - Afficher tous les exercices : 
router.get('/', authMiddleWare, exerciceController.getAllExercises);
// router.get('/', exerciceController.getAllExercises);

// 03. Route getRandomRoutine - Créer une table d'exercices aléatoires:
router.get('/random', authMiddleWare, exerciceController.getRandomRoutine);
// router.get('/random', exerciceController.getRandomRoutine);

// 04. Afficher un exercice par son id - Read Exercise by id:
router.get('/:id', authMiddleWare, exerciceController.getExerciseById)
// router.get('/:id', exerciceController.getExerciseById);

// 05. Modifier un exercice - Update Exercise:
router.put('/:id', authMiddleWare, exerciceController.updateExercise);
// router.put('/:id', exerciceController.updateExercise);

// 06. Supprimer un exercice :
router.delete('/:id', authMiddleWare, exerciceController.deleteExercise)
// router.delete('/:id', exerciceController.deleteExercise);

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

// Path: server/routes/userRoutes.js