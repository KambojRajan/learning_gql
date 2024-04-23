import { Game } from "../models/Game"
import { Review } from "../models/Review"
import { connectToDB } from "../mongo"
import { getReview, type Review as Ireview } from "./reviews.resolvers"

export interface Game {
    id: Number,
    title: string,
    platform: Array<string>
}

export async function getAllGames(): Promise<Game[]> {
    try {
        console.log("Starting query for games")
        await connectToDB()
        const games = await Game.find()
        console.log("query for games done")
        return games
    } catch (error) {
        console.log("ERROR_WHILE_GETTING_ALL_THE_GAMES", error)
        throw error
    }
}


export async function getGame(id: string): Promise<Game> {
    try {
        await connectToDB()
        const game = await Game.findOne({ id: id })
        return game

    } catch (error) {
        console.error("Error while getting game by id:", error);
        throw error;
    }
}

export async function getReviewForGame(id: string): Promise<Ireview[]> {
    try {
        await connectToDB()
        const reviews = await Review.find({
            game_id: id
        })
        console.log("game reviews => ", reviews)
        return reviews
    } catch (error) {
        console.log("error in geting reviews for this game")
        throw error
    }
}


export async function getGameAsscociatedWithAReview(id: string): Promise<Game> {
    try {
        await connectToDB()
        const review = (await Review.findOne({ id: id })) as Ireview
        const game = await Game.findOne({ id: review.game_id })
        return game
    } catch (error) {
        console.log("error in geting game associated with this game")
        throw error
    }
}

export async function deleteGameById(id: string): Promise<Game[]> {
    try {
        await connectToDB()
        await Game.deleteOne({ id: id })
        const games = await getAllGames()
        return games
    } catch (error) {
        console.log("unable to delete this game")
        throw error
    }
}
interface InsertGameInput {
    id: string;
    title: string;
    platform: string[];
}

export async function insertGame(game: InsertGameInput): Promise<Game[]> {
    try {
        await connectToDB()
        await Game.create({
            id: Number(game.id),
            title: game.title,
            platform: game.platform
        })
        const games = await getAllGames()
        return games
    } catch (error) {
        console.log("error while inserting", error)
        throw error
    }
}