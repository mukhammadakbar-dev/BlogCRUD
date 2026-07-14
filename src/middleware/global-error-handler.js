export function GlobalErrorHandler(err, req, res, next) {
    const customErr = {
        statusCode: err.statusCode ? err.statusCode : 500,
        message: err.message ? err.message : "Internal server error"
    };
    return res.status(customErr.statusCode).json(customErr);
};