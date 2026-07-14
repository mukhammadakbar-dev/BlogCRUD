import { Types, model, Schema } from "mongoose";

const user = new Schema({
    id: { type: Types.ObjectId },
    fullName: { type: String },
    email: { type: String, unique: true }
}, {
    timestamps: true,
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

user.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'userId'
});

export default model('User', user);