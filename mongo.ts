import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) return console.log("Already connected to MongoDB");

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017', {
            dbName: "gql-learn",
            connectTimeoutMS: 10000,
        });
        isConnected = true;

        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
};