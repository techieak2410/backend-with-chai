import mongoose from "mongoose"

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    }catch(error){
        console.log(error)
        throw err
    }
})()