const Exercise = require('../models/exerciseModel');

const getExercisesByParam = (paramName) => {
  return async (req, res, next) => {
    try {
      const paramValue = req.params[paramName].toLowerCase(); // Convertir en minuscules
      const exercises = await Exercise.find({ [paramName]: {$regex: paramValue, $options: "i"} });
      console.log("Exercice trouvé ", exercises);
      if (exercises.length === 0) {
        return res.status(404).json({ msg: `Aucun exercice trouvé pour ${paramName} ${paramValue}` });
      }

      req.exercises = exercises; //  je stocke les exercices dans la requête
      next(); //next() pour passer au middleware suivant
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erreur serveur" });
    }
  };
};

module.exports = getExercisesByParam;
