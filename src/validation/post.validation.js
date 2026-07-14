import Joi from "joi";

export class Validation {
    static create(data) {
        const post = Joi.object({
            title: Joi.string().required().min(6).max(100),
            context: Joi.string().required()
        })
        return post.validate(data);
    };
    static update(data) {
        const post = Joi.object({
            title: Joi.string().optional().min(6).max(100),
            context: Joi.string().optional()
        })
        return post.validate(data);
    }
}