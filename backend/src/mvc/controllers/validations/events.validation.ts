import Joi from "joi";
// can put validations away from the logic
export const createEventSchemaJoiValidation = Joi.object({
  event_name: Joi.string().required(),
  event_location: Joi.string().required(),
  event_date: Joi.date().required(),
  event_description: Joi.string().optional(),
  event_longDescription: Joi.string().optional(),
});
