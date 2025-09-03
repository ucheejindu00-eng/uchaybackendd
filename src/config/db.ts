import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI as string);
    const conn = await mongoose.connect(
      "mongodb+srv://sylviaDB:womenintech@cluster0.fhx2vt1.mongodb.net/movieDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

export default connectDB;
