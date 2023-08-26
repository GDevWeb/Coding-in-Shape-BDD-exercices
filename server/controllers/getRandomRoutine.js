const Exercise = require('../models/exerciseModel');

let chosenExercises = [];

const getRandomExercise = async (muscle) => {
    try {
        const exercises = await Exercise.find({ muscle });
        console.log("All exercises:", exercises);

        const availableExercises = exercises.filter(exercise => !chosenExercises.includes(exercise._id.toString()));
        console.log("Available exercises:", availableExercises);

        if (availableExercises.length === 0) {
            console.log("No available exercises");
            chosenExercises = [];
            console.log("Chosen exercises reset:", chosenExercises);
            return getRandomExercise(muscle);
        }

        const randomIndex = Math.floor(Math.random() * availableExercises.length);
        console.log("Random index:", randomIndex);
        const randomExercise = availableExercises[randomIndex];
        console.log("Random exercise chosen:", randomExercise);
        chosenExercises.push(randomExercise._id.toString());
        console.log("Chosen exercises:", chosenExercises);

        return randomExercise;
    } catch (error) {
        console.log("Error in getRandomExercise:", error);
        throw error;
    }
};

const getRandomRoutine = async (req, res) => {
    try {
        const muscles = ["cervicaux", "deltoïdes", "lombaires", "hanches", "jambes"];
        const selectedExercises = [];

        for (const muscle of muscles) {
            const randomExercise = await getRandomExercise(muscle);
            console.log("Random exercise for muscle", muscle, ":", randomExercise);
            selectedExercises.push(randomExercise);
            console.log("Selected exercises:", selectedExercises);
        }

        console.log("Final selected exercises:", selectedExercises);
        res.json(selectedExercises);
    } catch (error) {
        console.log("Error in getRandomRoutine:", error);
        console.log("Chosen exercises:", chosenExercises);
        res.status(500).json({ msg: "Erreur serveur" });
    }
};

module.exports = getRandomRoutine;
