import mongoose from "mongoose";
import config from "config";

async function connectDB() {
  const dbUri = config.get<string>("dbUri");
  await mongoose.connect(`${dbUri}`);
  try {
    return console.log("DB Connected");
  } catch (e) {
    return console.log(e);
  }
}

export default connectDB;
