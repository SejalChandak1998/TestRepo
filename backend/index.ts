import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./src/init/routes";
import db from "./src/init/db";
import theApp from "./src/init/theApp";

dotenv.config();
const app: Express = express();

const cors = require("cors");

app.use(cors("*"));
theApp(app);
db();
routes(app);

app.listen(3000, () => {
  console.log(`⚡️ [server]: Server is running at https://localhost:${3000}`);
});
export default app;
