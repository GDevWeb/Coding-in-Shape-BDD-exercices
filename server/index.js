const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// 01. Créer une application Express :
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares :
app.use(express.json());

// Routes : 
const exerciseRoutes = require('./routes/exerciseRoutes');
app.use('/api/exercises', exerciseRoutes);

// 02. Connexion à la base de données :
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    console.log('Connexion à MongoDB réussie !');

}).catch((error) => { 

    console.log(error);
    console.error('Connexion à MongoDB échouée !', error);

});

// 03. Lancer le serveur :
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`);
})