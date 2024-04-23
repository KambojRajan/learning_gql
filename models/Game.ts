import mongoose, { Schema } from "mongoose";

const GameSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    platform: {
        type: [String],
        required: true
    }
})

export const Game = mongoose.models.Game || mongoose.model("Game", GameSchema, 'games')