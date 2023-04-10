import { Request, Response } from "express";
import { getIDfromToken } from "../../helpers/getIDfromToken";
import { Events, User } from "../models";
import { ValidationError } from "joi";
import {
  createUserSchema,
  subscribeUserToEventValidation,
} from "./validations/user.validation";

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const UserProfile = (req: Request | any, res: Response) => {
  const user_id = getIDfromToken(req);
  console.log("user_id", user_id);
  return User.findById(user_id, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.status(403).json({
        success: false,
        message: req.i18n.t("simpleStringWithVariable", {
          variable1: "3",
          variable2: "3",
        }),
      });
    } else if (user) {
      res.status(200).send({
        success: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  });
};

const getAllUsers = async (req: Request, res: Response) => {
  const allusers = await User.find().lean().exec();
  res.status(200).json({ data: allusers });
};

const UserUpdate = async (req: Request | any, res: Response) => {
  const user_id = getIDfromToken(req);
  console.log("user_id", user_id);
  const { email, password, name } = req.body;
  if (email) delete req.body.email;
  if (name) req.body.name = name;
  if (password) {
    const newPassword = bcrypt.hashSync(password, saltRounds);
    req.body.password = newPassword;
  }
  const user = await User.findOneAndUpdate(
    { _id: user_id },
    { $set: req.body },
    { new: true }
  );

  return res.status(200).send({
    success: true,
    message: "Profile Updated Successfully ",
    user: user,
  });
};

const createUser = async (req: Request, res: Response) => {
  try {
    await createUserSchema.validateAsync(req.body);
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ error: error.message });
    }
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// subscribe user to the event
const subscribeUserToEvent = async (req: Request, res: Response) => {
  try {
    await subscribeUserToEventValidation.validateAsync(req.query);
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: req.query.id,
      },
      { $push: { subscribedEvents: req.query.event_id } },
      { new: true }
    );

    console.log("updated user", updatedUser);

    res.status(201).json({ data: updatedUser });
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "internal server error", obj: err });
    }
  }
};

/**
 * @desc This function will get All the events that are subscribed by the user
 * @param req Request Object of Express
 * @param res Response Object of Express
 */
const getAllEventsForUser = async (req: Request, res: Response) => {
  const allEventIds = await User.findById(req.params.id).select(
    "subscribedEvents"
  );

  const allEventsData = await Promise.all(
    allEventIds.subscribedEvents.map(async (eventId) => {
      const event = await Events.findById(eventId);
      return event;
    })
  );

  res.status(200).json({ data: allEventsData });
};

export {
  UserProfile,
  UserUpdate,
  createUser,
  subscribeUserToEvent,
  getAllUsers,
  getAllEventsForUser,
};
