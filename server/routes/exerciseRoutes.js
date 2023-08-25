const express = require('express');
const router = express.Router();
const exerciceController = require('../controllers/exerciceController');

// Routes :
// 01. Ajouter un exercice :
router.post('/create', exerciceController.createExercise);
// 02. Afficher tous les exercices :
router.get('/exercises', exerciceController.getAllExercises);
// 03. Afficher un exercice par son id :
router.get('/exercises/:id', exerciceController.getExerciseById);
// 04. Modifier un exercice :
router.put('/exercises/:id', exerciceController.updateExercise);
// 05. Supprimer un exercice :
router.delete('/exercises/:id', exerciceController.deleteExercise);

// Extras CRUD : 
//06. Afficher un exercice par son type :
//http://localhost:3000/api/exercises/exercises/type/Core
router.get('/exercises/type/:type', exerciceController.getExercisesByType);

// 07. Afficher un exercice par son muscle : 
router.get('/exercises/muscle/:muscle', exerciceController.getExercisesByMuscle);

// 08.RandomRoutine : 
router.get('/random', exerciceController.getRandomRoutine);

module.exports = router;