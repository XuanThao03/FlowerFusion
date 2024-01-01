import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: [true, "Address must belong to a user!"],
    },
    firstName: {
      type: String,
      required: [true, "Address must have a customer first name!"],
    },
    lastName: {
      type: String,
      required: [true, "Address must have a customer last name!"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Address must have a phone number!"],
    },
    address: {
      type: String,
      required: [true, "Address must have a detailed address!"],
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const AddressModel = mongoose.model("addresses", AddressSchema);
export default AddressModel;
