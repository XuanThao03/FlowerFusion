import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import assyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../Middleware/AuthMiddleware.js";

dotenv.config();
const router = express.Router();

//Google login successfully
router.get("/login/success", async (req, res) => {
  if (req.user) {
    //check account in mongodb
    const user = await UserModel.findOne({ email: req.user._json.email });
    if (user) {
      res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone ?? "",
        address: user.address ?? "",
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
        isNew: false,
      });
    } else {
      const { given_name, family_name, email, isAdmin } = req.user._json;
      const firstname = given_name;
      const lastname = family_name;
      const password = "123456";
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
          isNew: true,
        });
      } else {
        res.status(400);
        throw new Error("Invalid User Data");
      }
    }
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
    6;
  }
});

//google login fail
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

//google login
router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

//google logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/login");
});

export default router;
