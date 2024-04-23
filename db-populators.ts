import { Author } from "./models/Author"
import { Game } from "./models/Game"
import { Review } from "./models/Review"
import { connectToDB } from "./mongo"

async function populate() {
    await connectToDB()
    try {
        const users = await Author.find()
        const games = await Game.find()

        const reviews = [
            {
                id: 1,
                rating: 8,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                author_id: 1,
                game_id: 1,
            },
            {
                id: 2,
                rating: 5,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                author_id: 3,
                game_id: 2,
            },
            {
                id: 3,
                rating: 10,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                author_id: 3,
                game_id: 4,
            },
            {
                id: 4,
                rating: 8,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                author_id: 2,
                game_id: 5,
            },
            {
                id: 5,
                rating: 9.8,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                author_id: 5,
                game_id: 5,
            }
        ]

        await Review.insertMany(reviews)
        console.log("successfuly inserted")

    } catch (error) {
        console.log("error => ", error)
    }
}


populate()