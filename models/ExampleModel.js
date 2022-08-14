import mongoose from "mongoose";

const ExampleModel = new mongoose.Schema({});

export default mongoose.models.Example ||
  mongoose.model("example", ExampleModel);
