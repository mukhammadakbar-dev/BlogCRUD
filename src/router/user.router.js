import { Router } from "express";
import { validator } from '../middleware/validator.js'
import { Validation } from '../validation/user.validation.js'
import controller from '../controller/user.controller.js'

const router = Router();

router
    .post('/', validator(Validation.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findBy)
    .patch('/:id', validator(Validation.create), controller.update)
    .delete('/:id', controller.delete);

export default router;