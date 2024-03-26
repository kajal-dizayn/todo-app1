import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    console.log(process.env.MONGODB_URI, "process.env.MONGODB_URI");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

export default connectMongoDB;
