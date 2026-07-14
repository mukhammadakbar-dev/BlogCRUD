import { connect } from "mongoose";
import { env } from "./env.js";

export async function connectDB(){
    try{
        await connect(env.MONGO_URI);
        console.log(`Database connected`);
    } catch (err) {
        console.log({message: err.message});
    };
};