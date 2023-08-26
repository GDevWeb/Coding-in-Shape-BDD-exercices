const errorMiddleware = (err, req, res, next) => {
    console.error(err); 

    const errorMessage = "Une erreur s'est produite sur le serveur.";
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({ error: errorMessage });
};

module.exports = errorMiddleware;
