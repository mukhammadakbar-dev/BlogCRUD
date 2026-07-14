import { ApiError } from '../utils/ApiError.js'

export function validator(schema) {
    return (req, res, next) => {
        const { err } = schema(req.body);
        if (err) {
            throw new ApiError(error.details[0].message, 422);
        };
        next();
    };
};