import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true, // You should be aware of the outcome after set to false
  }
);

UserSchema.method.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
