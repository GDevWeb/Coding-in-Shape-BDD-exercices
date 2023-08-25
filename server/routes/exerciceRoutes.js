const express = require('express');
const router = express.Router();
const exerciceController = require('../controllers/exerciceController');

router.post('/create', exerciceController.createExercise);
router.get('exercises', exerciceController.getAllExercises);
router.get('exercises/:id', exerciceController.getExerciseById);
router.out('exercises/:id', exerciceController.updateExercise);
router.delete('exercises/:id', exerciceController.deleteExercise);

module.exports = router;