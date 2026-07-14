export function succesResponse(res, data, statusCode = 200) {
    return res.status(statusCode).json({
        statusCode,
        message: 'Success',
        data
    });
};