import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from '../resolvers';



const typeDefs = gql(
    readFileSync(path.resolve(__dirname, './schema.graphql'), {
        encoding: 'utf-8'
    })
)

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 }
})

console.log("Running server at port ", 3000)