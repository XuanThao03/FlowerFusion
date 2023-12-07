import mongoose from "mongoose";

const CandleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    imgPath: {
      type: String,
      require: true,
    },
    discount: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true, // You should be aware of the outcome after set to false
  }
);

const CandleModel = mongoose.model("candles", CandleSchema);
export default CandleModel;
