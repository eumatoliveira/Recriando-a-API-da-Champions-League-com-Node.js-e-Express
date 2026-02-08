import express from "express";
import cors from "cors";
import playersRouter from "./routes/players.routes.js";
import clubsRouter from "./routes/clubs.routes.js";

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  // Middleware de Log
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });


  app.use("/api", playersRouter);
  app.use("/api", clubsRouter);

  return app;
};

export default createApp;

