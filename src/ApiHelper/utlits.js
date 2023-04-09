import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection[0]) {
    return;
  }
  try {
    mongoose.set("strictQuery", false);

    const conn = await mongoose.connect(process.env.customKey);
    console.log("MongoBD connected Host:", conn.connection.host);
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default connectDB;
