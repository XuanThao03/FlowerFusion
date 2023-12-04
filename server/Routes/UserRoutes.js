import express from "express";
import assyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";
const userRoute = express.Router();

userRoute.post(
  "/login",
  assyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        isAdmin: user.isAdmin,
        token: null,
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or Password");
    }
  })
);
export default userRoute;
