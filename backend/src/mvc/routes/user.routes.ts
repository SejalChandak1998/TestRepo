import express from "express";
import { userController } from "../controllers";
import { auth, userAuth } from "../middlewares";
import { Routes } from "./routesStrings";

const router = express.Router();

router.post("/", [], userController.createUser);
router.get("/", [], userController.getAllUsers);

router.post("/events", [], userController.subscribeUserToEvent);
router.get("/events/:id", [], userController.getAllEventsForUser);

router.get(Routes.profile, [], userController.UserProfile);
router.post(Routes.update, [], userController.UserUpdate);

export default router;
