import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    total: {
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

const CartModel = mongoose.model("cart", CartSchema);
export default CartModel;
