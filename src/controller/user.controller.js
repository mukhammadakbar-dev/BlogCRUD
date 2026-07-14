import User from '../schema/user.schema.js';
import Controller from '../controller/base.controller.js';
import { asyncCatch } from '../middleware/asyncCatch.js';
import { succesResponse } from '../utils/succes-response.js';
import { ApiError } from '../utils/ApiError.js'
import userSchema from '../schema/user.schema.js';

class UserController extends Controller {
    create = asyncCatch(async (req, res) => {
        const exist = await this.schema.findOne({ userName: req.body.userName });
        if (exist) {
            throw new ApiError('Username already exists', 409);
        };
        const data = await this.schema.create(req.body);
        return succesResponse(res, data, 201);
    })
};

export default new UserController(User, 'posts')