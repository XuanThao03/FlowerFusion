import mongoose from "mongoose";

const OccasionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price1: {
      type: String,
      require: true,
    },
    price2: {
      type: String,
      require: true,
    },
    price3: {
      type: String,
      require: true,
    },
    imgPath1: {
      type: String,
      require: true,
    },
    imgPath2: {
      type: String,
      require: true,
    },
    imgPath3: {
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

const OccasionModel = mongoose.model("occasions", OccasionSchema);
export default OccasionModel;
