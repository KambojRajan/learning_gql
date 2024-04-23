import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    }
})

export const Author = mongoose.models.Author || mongoose.model("Author", AuthorSchema, 'authors')