import { getAllReviews, getReview, getWriterOfReview } from '../resolvers/reviews.resolvers';
import { deleteGameById, getAllGames, getGame, getGameAsscociatedWithAReview, getReviewForGame, insertGame } from '../resolvers/games.resolvers';
import { getAllAuthors, getAuthor, getReviewsByAuthor } from '../resolvers/authors.resolvers';

export const resolvers = {
    Query: {
        reviews: () => getAllReviews(),
        games: () => getAllGames(),
        authors: () => getAllAuthors(),
        review: (_parent: any, args: any, _ctx: any) => getReview(args.id as string),
        author: (_parent: any, args: any, _ctx: any) => getAuthor(args.id as string),
        game: (_parent: any, args: any, _ctx: any) => getGame(args.id as string)
    },
    Game: {
        reviews: (parent: any) => getReviewForGame(parent.id as string)
    },
    Author: {
        reviews: (parent: any) => getReviewsByAuthor(parent.id as string)
    },
    Review: {
        author: (parent: any) => getWriterOfReview(parent.id as string),
        game: (parent: any) => getGameAsscociatedWithAReview(parent.id as string)
    },
    Mutation: {
        deleteGame: (_parent: any, args: any) => deleteGameById(args.id),
        insertGame: (_parent: any, args: any) => insertGame(args.game)
    }
}
