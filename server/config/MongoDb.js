import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connectDatabase = mongoose.connect(process.env.MONGO_URL, {});
    console.log("Mongo Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
