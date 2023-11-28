import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {cfg} from './bin/index.js'


import {connectToDb} from './config/MongoConnect.js'
import {setData} from "./controller/AddData.js";

const port = cfg.port;
const connectionString = cfg.dbConnectionString;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

dotenv.config();


app.listen(port, () => {
    console.log(`Server start on ${port}`);
    connectToDb(connectionString);
    setData({ params: { fakeDataNumber: cfg.fakeDataNumber } }, null);
});




