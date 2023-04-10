import Joi from "joi";

export const subscribeUserToEventValidation = Joi.object({
  id: Joi.string().required(),
  event_id: Joi.string().required(),
});

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmpassword: Joi.string().required(),
});
