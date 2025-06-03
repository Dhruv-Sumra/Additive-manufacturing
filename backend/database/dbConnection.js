import mongoose  from "mongoose";

const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI , {
        dbName:"ISAMC"
    }).then(()=>{
        console.log("connected to database successfully")
    }).catch(err=>{
        console.log(err.message , "some error occured")
    })
}

export default dbConnection