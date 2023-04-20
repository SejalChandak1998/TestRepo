import mongoose from "mongoose";
import { ISchemaType } from "@/interfaces/interface";
import { CreateSchema } from "../../helpers/createSchema";

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const schema = CreateSchema({
  name: { type: String },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  confirmpassword: { type: String },
  subscribedEvents: {
    type: Array<String>,
    ref: "Event",
    default: [],
    unique: false,
  },
});

schema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
  } else {
    next();
  }
});
schema.pre("save", function (next) {
  if (!this.isModified("confirmpassword")) return next();
  if (this.confirmpassword) {
    this.confirmpassword = bcrypt.hashSync(this.confirmpassword, saltRounds);
    next();
  } else {
    next();
  }
});

module.exports = mongoose.model("users", schema);
