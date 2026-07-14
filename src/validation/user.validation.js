import Joi from "joi";

export class Validation {
    static create(data) {
        const user = Joi.object({
            fullName: Joi.string().required().min(6).max(30),
            email: Joi.string().email().required()
        })
        return user.validate(data);
    };
    static update(data) {
        const post = Joi.object({
            fullName: Joi.string().optional().min(6).max(30),
            email: Joi.string().email().optional()
        })
        return post.validate(data);
    }
}