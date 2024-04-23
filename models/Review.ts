import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author_id: {
        type: Number,
        required: true,
        ref: "Author"
    },
    game_id: {
        type: Number,
        required: true
    }
})

export const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema, 'reviews')