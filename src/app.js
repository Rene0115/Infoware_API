import express from "express";
import pino from "pino";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const logger = pino();

const port = process.env.PORT || 4000;

const start = () => {
app.listen(port , ()=> {
    logger.info(`Listening on port ${port}`);
})
}

start();