const Exercise = require('../models/exerciseModel');

const exerciseController = {

    // Ajouter un exercice :
    createExercise : async (req, res) => {

        const { name, description, image, video, type, muscle } = req.body;

        try {
            const exercise = await Exercise.findOne({name});
            if(exercise) return res.status(400).json({message: "Cet exercice existe déjà"});

            const newExercise = new Exercise({
                name, description, image, video, type, muscle
            });

            await newExercise.save();
            res.json({message: "Nouvel exercice créé"});

        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erreur serveur"});
        }

    },


    // Récupérer tous les exercices :
    getExercices: async (req, res) => { 
        try {
            const exercices = await Exercise.find();
            res.json(exercices);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erreur serveur"});
        }
    },

    // Récupérer un exercice par son id :
    getExercicesById: async (req, res) => {

        try {
            const exercice = await Exercise.findById(req.params.id);
            res.json(exercice);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erreur serveur"});
        }

    },

    // Modifier un exercice :
    updateExercise: async (req, res) => { 

        const { name, description, image, video, type, muscle } = req.body;

        try {
            await Exercise.findOneAndUpdate({_id: req.params.id}, {
                name, description, image, video, type, muscle
            });
            res.json({message: "Exercice modifié"});
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erreur serveur"});
        }

    } ,

    // Supprimer un exercice :
    deleteExercise: async (req, res) => {
            
            try {
                await Exercise.findByIdAndDelete(req.params.id);
                res.json({message: "Exercice supprimé"});
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Erreur serveur"});
            }
    
        },

        // Extras feature : 
    // Récupérer les exercices par type :
    getExercicesByType: async (req, res) => {
            
            try {
                const exercices = await Exercise.find({type: req.params.type});
                res.json(exercices);
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Erreur serveur"});
            }
    
        },



};