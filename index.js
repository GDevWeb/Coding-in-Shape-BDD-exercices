const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = 'mongodb://localhost:27017/ma_base_de_donnees';

require('dotenv').config();

const app = express();

const corsOptions = {
    origin : "http://localhost:5173",
    credentials: true,
}


const PORT = process.env.PORT || 3000;

// Middlewares :
app.use(express.json());
app.use(cors(corsOptions));

// Routes : 
const exerciseRoutes = require('./server/routes/exerciseRoutes');
app.use('/api/exercises', exerciseRoutes);

// 02. Connexion à la base de données :
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    console.log('Connexion à la BDD Coding In Shape - exercises !');

}).catch((error) => { 

    console.log(error);
    console.error('Connexion à MongoDB échouée !', error);

});

// 03. import de errorMiddleware :
const errorMiddleware = require('./server/middleware/errorMiddleware');

app.use(errorMiddleware);

// 04. Lancer le serveur :
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`);
})