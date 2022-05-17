import express from "express";
import router from "./routes";
import "dotenv/config";

const { APP_VERSION } = process.env;

const app = express();

app.use(express.json());
app.use(`${APP_VERSION}`, router);

export default app;
