import { ApiError } from "../utils/ApiError.js"
import { succesResponse } from '../utils/succes-response.js'
import { asyncCatch } from "../middleware/asyncCatch.js"

export default class Controller {
    constructor(schema, populate) {
        this.schema = schema;
        this.populate = populate;
    };

    create = asyncCatch(async(req, res) => {
        const data = await this.schema.create(req.body);
        return succesResponse(res, data, 201);
    })

    findAll = asyncCatch(async(req, res) => {
        const data = await this.schema.find().populate(this.populate);
        return succesResponse(res, data);
    });

    findBy = asyncCatch(async(req, res) => {
        const data = await this.schema.findById(req.params.id).populate(this.populate);
        if (!data) {
            throw new ApiError("Not found", 404);
        }
        return succesResponse(res, data, 201);
    });

    update = asyncCatch(async(req, res) => {
        const data = await this.schema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            throw new ApiError("Not found", 404);
        }
        return succesResponse(res, data);
    });

    delete = asyncCatch( async (req, res) => {
        const data = await this.schema.findByIdAndDelete(req.params.id);
        if (!data) {
            throw new ApiError("Not found", 404);
        }
        return succesResponse(res, {});
    });
};