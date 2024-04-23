import { Author } from "../models/Author"
import { Review } from "../models/Review"
import { connectToDB } from "../mongo"
import type { Review as Ireview } from "./reviews.resolvers"

export interface Author {
    id: number,
    name: string,
    verified: boolean
}

export async function getAllAuthors(): Promise<Author[]> {
    try {
        console.log("Starting query for authors")
        await connectToDB()
        const authors = await Author.find()
        console.log("query for authors done")
        return authors
    } catch (error) {
        console.log("ERROR_WHILE_GETTING_ALL_THE_AUTHORS", error)
        throw error
    }
}


export async function getAuthor(id: string): Promise<Author> {
    try {
        await connectToDB()
        const author = await Author.findOne({ id: id })
        return author

    } catch (error) {
        console.error("Error while getting author by id:", error);
        throw error;
    }
}

export async function getReviewsByAuthor(id: string): Promise<Ireview[]> {
    try {
        await connectToDB()
        const reviews = await Review.find({
            author_id: id
        })
        return reviews
    } catch (error) {
        console.log("Error while fetching reviews written by this author")
        throw error
    }
}