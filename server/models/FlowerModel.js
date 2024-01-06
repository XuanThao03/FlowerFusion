import mongoose from "mongoose";

const FlowerSchema = new mongoose.Schema(
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
    key: {
      type: String,
      require: true,
    },
    arrival: {
      type: String,
      require: true,
    },
    categories: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    isTrending: {
      type: Boolean,
      default: false,

    },
    type: {
      type: String,
      default: "flower",
    },
  },
  {
    versionKey: false,
    timestamps: true, // You should be aware of the outcome after set to false
  }
);

const FlowerModel = mongoose.model("flowers", FlowerSchema);
export default FlowerModel;
 