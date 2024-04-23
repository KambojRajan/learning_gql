import { access } from "fs";
import { Review } from "../models/Review";
import { connectToDB } from "../mongo";
import { Game } from "../models/Game";
import { Author } from "../models/Author";
import type { Author as Iauthor } from "./authors.resolvers";

export interface Review {
    id: number;
    rating: number;
    content: string;
    author_id: number;
    game_id: number;
}

export async function getAllReviews(): Promise<Review[]> {
    try {
        await connectToDB();
        const reviews = await Review.find({});
        return reviews;

    } catch (error) {
        console.error("Error while getting all reviews:", error);
        throw error;
    }
}

export async function getReview(id: string): Promise<Review> {
    try {
        await connectToDB()
        const review = await Review.findOne({
            id: id
        })
        return review
    } catch (error) {
        console.error("Error while getting review by id:", error);
        throw error;
    }
}

export async function getWriterOfReview(id: String): Promise<Iauthor> {
    try {
        await connectToDB();
        const review = await Review.findOne({ id: id });
        if (!review) {
            throw new Error('Review not found');
        }
        const author = await Author.findOne({ id: review.author_id });
        if (!author) {
            throw new Error('Author not found');
        }
        return author;
    } catch (error) {
        console.log("Error while getting review")
        throw error
    }
}