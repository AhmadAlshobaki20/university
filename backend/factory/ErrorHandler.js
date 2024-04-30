function errorHandler(err, req, res, next) {
    const error = new Error();
    
}

// Register the error handling middleware
app.use(errorHandler);
