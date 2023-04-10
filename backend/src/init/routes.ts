import { Express } from "express";

import { authRouter, eventRouter, userRouter } from "../mvc/routes";
import { Routes } from "../mvc/routes/routesStrings";

export default (app: Express) => {
  app.use("/", authRouter);
  app.use(Routes.user, userRouter);
  app.use(Routes.events, eventRouter);
};
