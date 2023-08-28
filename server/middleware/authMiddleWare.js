const jwt = require('jsonwebtoken');

const authMiddleWare = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error, "Accès non autorisé, retour à la page de connexion");
        res.status(401).json({ message: "Accès non autorisé" });
    }
};

module.exports = authMiddleWare;
