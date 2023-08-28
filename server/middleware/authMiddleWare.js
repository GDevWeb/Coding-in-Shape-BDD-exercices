const jwt = require('jsonwebtoken');

const authMiddleWare = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.userId = decoded.userId;

        // Contrôle du status administrateur : 

        // Si la vérification d'isAdmin réussit, appeler next()
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Accès non autorisé" });
    }
};

module.exports = authMiddleWare;
