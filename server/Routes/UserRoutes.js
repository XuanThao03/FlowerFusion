import express from "express";
import assyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../Middleware/AuthMiddleware.js";
import bcrypt from "bcrypt";

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
    const phone = "";
    const address = "";
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
  })
);
//edit userprofile
userRoute.post(
  "/edit",
  protect,
  assyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    console.log(req.body);
    if (user) {
      user.firstname = req.body.firstname || user.firstname;
      user.lastname = req.body.lastname || user.lastname;
      user.phone = req.body.phone || user.phone;
      user.address = req.body.address || user.address;
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        firstname: updateUser.firstname,
        lastname: updateUser.lastname,
        email: updateUser.email,
        phone: updateUser.phone,
        isAdmin: updateUser.isAdmin,
        address: updateUser.address,
        createdAt: updateUser.createdAt,
        token: generateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

//find user
userRoute.post(
  "/finduser",
  assyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        isAdmin: user.isAdmin,
        //token: generateToken(user._id),
        createdAt: user.createdAt,
        lastUpdated: user.lastUpdated ?? "",
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

//change password
userRoute.post(
  "/changePassword",
  assyncHandler(async (req, res) => {
    const { email, newpassword, oldpassword } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      if (
        oldpassword !== "" &&
        (await user.matchPassword(oldpassword)) == false
      ) {
        console.log("check");
        return;
      }
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(newpassword, salt);
      UserModel.updateOne(
        { email: email },
        {
          $set: {
            password: hashpassword,
          },
          $currentDate: { lastUpdated: true },
        }
      )
        .then((obj) => {
          res.json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            isAdmin: user.isAdmin,
            //token: generateToken(user._id),
            createdAt: user.createdAt,
          });
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    } else {
      res.status(404);
      throw new Error("User not found!");
    }
  })
);

export default userRoute;
