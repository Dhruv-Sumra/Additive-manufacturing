import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnection  from './database/dbConnection.js'
import {errorMiddleware} from './error/error.js'
import RegisterSchema from './routes/register.js'
import LoginSchema from './routes/login.js'
import dbRoutes from "./routes/cards.js";



const app = express()
dotenv.config({path: './config/config.env'})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use(errorMiddleware)
app.use('/api/v1/register' , RegisterSchema)
app.use('/api/v1/login' , LoginSchema)
app.use("/api/v1/db", dbRoutes);

dbConnection()

export default app