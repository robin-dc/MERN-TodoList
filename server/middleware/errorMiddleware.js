const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ?  res.statusCode : 500

    res.status(statusCode).json({
        message: err.message || "Something went wrong!",
        stack: process.env.NODE_ENV !== 'production' ? err.stack : null
    })
}

module.exports = errorHandler
