import express from "express";
import cors from "cors";
import errorHandler from "./error.middleware.js";
import morgan from "morgan";
import router from "../routers/index.routes.js";

const middleware = (app) => {
  // Enable CORS
  app.use(cors());

  // Logging
  app.use(morgan("dev"));

  // Parse incoming JSON data
  app.use(express.json());

  // Parse incoming URL-encoded data
  app.use(express.urlencoded({ extended: true }));

  // Register the router
  app.use(router);

  // Handle Errors
  app.use(errorHandler);

  // Fallback route handler
  app.use("*", (req, res) => {
    res.status(200).send("Server is Running Check API docs");
  });
};

export default middleware;
