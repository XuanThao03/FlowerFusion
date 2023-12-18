import express from "express";
import assyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../Middleware/AuthMiddleware.js";
const userRoute = express.Router();

//login
userRoute.post(
  "/login",
  assyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or Password");
    }
  })
);

//REGISTER
userRoute.post(
  "/",
  assyncHandler(async (req, res) => {
    const { firstname, lastname, email, password, isAdmin } = req.body;
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await UserModel.create({
      firstname,
      lastname,
      email,
      password,
    }).catch((err) => {
      console.error(err);
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);

//profile
userRoute.post(
  "/profile",
  protect,
  assyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);


//delete user
userRoute.delete(
  "/delete/profile",
  assyncHandler(async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }

    await user.deleteOne();

    res.status(200).json({ email: req.params.email });

//update userprofile
userRoute.put(
  "/profile",
  protect,
  assyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    if (user) {
     user.name = req.body.name || user.name
     user.email = req.body.email || user.email
     if(req.body.password) {
      user.password = req.body.password
     }
     const updateUser = await user.save() 
     res.json({
      _id: updateUser._id,
        firstname: updateUser.firstname,
        lastname: updateUser.lastname,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser._id),
        createdAt: updateUser.createdAt,
     })
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);
export default userRoute;
