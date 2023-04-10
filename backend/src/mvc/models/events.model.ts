import mongoose, { Schema } from "mongoose";
import { CreateSchema } from "../../helpers/createSchema";

const schema = CreateSchema({
  event_name: { type: String },
  event_location: { type: String },
  event_date: { type: String },
  event_description: { type: String },
  event_longDescription: { type: String },
});

module.exports = mongoose.model("events", schema);
