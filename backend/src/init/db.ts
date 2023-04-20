import mongoose from "mongoose";

export default () => {
  const mongoString = "mongodb://127.0.0.1:27017/Eventify";

  mongoose.connect(mongoString, {}, (error: Error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Database Connected");
    }
  });
};
mongoose.set('strictQuery', false);