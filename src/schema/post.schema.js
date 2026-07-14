import { Types, model, Schema } from "mongoose";

const post = new Schema({
    id: { type: Types.ObjectId },
    title: { type: String },
    context: { type: String },
    userId: { type: Types.ObjectId, ref: 'User', required: true}
}, {
    timestamps: true,
    versionKey: false
})

export default model('Post', post);