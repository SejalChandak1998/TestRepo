import { Request, Response } from "express";
import { Events } from "../models";
import Joi, { ValidationError } from "joi";
import { createEventSchemaJoiValidation } from "./validations/events.validation";

const getAllEvents = async (req: Request, res: Response) => {
  const getAllEvents = await Events.find().lean().exec();
  res.send(getAllEvents).end();
};

/**
 * @desc Create an Event
 * @param req
 * @param res
 */
const createEvent = async (req: Request, res: Response) => {
  try {
    // check for validation
    await createEventSchemaJoiValidation.validateAsync(req.body);

    // create new object
    const object = new Events(req.body);

    // save the object in the db
    const result = await object.save();

    // send result back to the API
    res.send(result);
  } catch (err) {
    // if we catch error of type Joi Validation
    if (err instanceof ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      // throw a common error
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

/**
 * @desc Delete a particular event by ID
 * @param req
 * @param res
 */
const deleteEvent = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    const event = await Events.deleteOne(eventId);

    if (event) {
      res.status(200).json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getEventById = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    const event = await Events.findOne({ _id: eventId });
    res.send(event);
  } catch (err) {
    return err;
  }
};

export { getAllEvents, createEvent, deleteEvent, getEventById };
