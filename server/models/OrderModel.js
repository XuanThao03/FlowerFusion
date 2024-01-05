import mongoose from "mongoose";
import bcrypt from "bcrypt";

const OrderSchema = new mongoose.Schema(
  {
    num: {
      type: Number,
      required: false,
    },
    userEmail: {
      type: String,
      required: false,
      default: "",
    },
    contact: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: false,
      default: "",
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    isNewOffer: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSpecialOffer: {
      type: Boolean,
      required: false,
      default: true,
    },
    payment: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: false,
      default: "",
    },
    quantity: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    products: [
      {
        imgPath: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true, // You should be aware of the outcome after set to false
  }
);

const OrderModel = mongoose.model("orders", OrderSchema);
export default OrderModel;
