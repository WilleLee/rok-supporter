import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
const $PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build"));

const router = require('./route');
app.use('/', router);

app.listen($PORT, () => {
  console.log(`The ROK Supporter now runs on the port number ${$PORT}`);
});
