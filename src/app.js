import express from "express";
import pino from "pino";
import dotenv from "dotenv";
import dataSource from "./config/db.config";
dotenv.config();

const app = express();
const logger = pino();

const port = process.env.PORT || 4000;

const start = () => {
  dataSource
    .initialize()
    .then(() => {
      logger.info("Database initialized");
    })
    .catch((err) => {
      logger.error(err);
    });
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

start();
