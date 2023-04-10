import express from "express";
import { eventController } from "../controllers";

const router = express.Router();

router.get("/", [], eventController.getAllEvents);
router.get("/:id", [], eventController.getEventById);
router.post("/", [], eventController.createEvent);
router.delete("/", [], eventController.deleteEvent);
// router.post(Routes.update, [], userController.UserUpdate);

export default router;
