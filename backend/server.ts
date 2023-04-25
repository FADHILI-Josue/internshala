import express, { Application } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/user';
import { Request, Response } from 'express';
import data from './sample_data.json'


class connection{
    public app: Application;

    public constructor() {
        this.app = express();
        dotenv.config()
    }
    public useMiddlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
    public test() {
        this.app.get("/", (req, res) => {
            res.status(200).json("Testing server!");
        })
    }
    private listen() {
        this.app.listen(process.env.PORT, () => {
            console.log("Connected to db & server started on port", process.env.PORT);
        });
    }
    
    public async connectToDB() {
        await mongoose.connect(process.env.DB_URI as string);
        this.listen();
    }
    public initializeRoutes() {
        this.app.use("/api/user", router);
        this.app.get('/api/data/pushDataOnce', async(req:Request, res:Response)=>{
            try {
                // User.insertMany(data)
                // console.log(data)
                res.send(data)
            } catch (error) {
                console.log(error)
                res.send(error)
            }
        })
    }
}

const server = new connection();

server.useMiddlewares()
server.test()
server.connectToDB()
server.initializeRoutes()
