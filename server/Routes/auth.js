import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import assyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../Middleware/AuthMiddleware.js";

dotenv.config();
const router = express.Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/login");
});

//SaveDatabase
router.post(
  "/googlesave",
  assyncHandler(async (req, res) => {
    const { given_name, family_name, email, isAdmin } = req.body;
    const firstname = given_name;
    const lastname = family_name;
    const password = "123456";

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
        firstname: user.given_name,
        lastname: user.family_name,
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
export default router;
