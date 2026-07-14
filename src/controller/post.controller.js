import Post from '../schema/post.schema.js';
import Controller from '../controller/base.controller.js';
import { asyncCatch } from '../middleware/asyncCatch.js';
import { succesResponse } from '../utils/succes-response.js';
import { ApiError } from '../utils/ApiError.js'
import userSchema from '../schema/user.schema.js';

class PostController extends Controller {

};

export default new PostController(Post, "userId");