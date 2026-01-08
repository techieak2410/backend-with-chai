import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const myDBconnect=async ()=>{
    try{
        const connectionINstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connection Establsihed Success",`${connectionINstance.connection.host}`)


    }
    catch(error){
        console.log("error",error);
        process.exit(1);
    }
}

export default myDBconnect;