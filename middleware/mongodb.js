import mongoose from "mongoose";

let mongo;

if (mongoose.connections[0].readyState) {
  mongo = mongoose.connections[0];
} else {
  mongo = mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

export default mongo;
