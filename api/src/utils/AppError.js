class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 440) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;