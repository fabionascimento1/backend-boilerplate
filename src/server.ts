/* import express from 'express'

const app = express()
const port = 3000
app.use(express.json())


app.use("/api", authRoutes);

app.get('/', (req, res) => {
    res.json({ message: "hello world "})
})

app.listen(port, ()=>{
    console.log('ser is running')
})
 */
import * as bodyParser from 'body-parser'

import {Server} from '@overnightjs/core'
import { Application } from 'express'
import * as http from 'http';
import { IndexControler } from './controllers';

export class SetupServer extends Server {
    private server?: http.Server

    constructor(private port = 3000){
        super()
    }

    public async init(): Promise<void> {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.setupControllers();
    }
    
    public getApp(): Application { return this.app; }

    private setupControllers(): void {
        const indexController = new IndexControler()
        this.addControllers([
            indexController
        ])
    }

    public start(): void{
        this.server = this.app.listen(this.port, () => {
            console.log('server online...')
        })
    }
}

