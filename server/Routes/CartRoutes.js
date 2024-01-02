import express from "express";
import assyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../Middleware/AuthMiddleware.js";
import bcrypt from "bcrypt";
import CartModel from "../models/Cart.js";

const cartRoute = express.Router();

//insert
cartRoute.post(
  "/insert",
  protect,
  assyncHandler(async (req, res) => {
    const { userEmail, status, quantity, total, products } = req.body;
    const cart = await CartModel.findOne({ userEmail });

    if (cart) {
      var sumTotal = 0;
      products.forEach((p) => {
        var flag = false;
        sumTotal += p.price;
        console.log("p1", p.name);
        cart.products.forEach((cp) => {
          console.log("cp", cp.name);
          console.log("p", p.name);
          if (cp.name === p.name) {
            flag = true;
            console.log(true);
            CartModel.updateOne(
              {
                userEmail: userEmail,
                products: {
                  $elemMatch: {
                    name: p.name,
                  },
                },
              },
              {
                $inc: {
                  "products.$.quantity": p.quantity,
                },
              }
            )
              .then((obj) => {
                console.log("Increase product in cart successfully");
                res.json({
                  message: "Increase product in cart successfully",
                });
              })
              .catch((err) => {
                console.log("Error: " + err);
              });
          }
        });
        if (!flag) {
          CartModel.updateOne(
            { userEmail: userEmail },
            {
              $push: {
                products: {
                  imgPath: p.imgPath,
                  name: p.name,
                  price: p.price,
                  quantity: p.quantity,
                  type: p.type,
                },
              },
            }
          )
            .then((obj) => {
              console.log("Add product in cart successfully");
              res.json({
                message: "Add product in cart successfully",
              });
            })
            .catch((err) => {
              console.log("Error: " + err);
            });
        }
      });
      CartModel.updateOne(
        { userEmail: userEmail },
        {
          $inc: {
            total: total,
            quantity: quantity,
          },
        }
      )
        .then((obj) => {
          res.json({
            message: "Increase cart successfully",
          });
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    } else {
      const cart = await CartModel.create({
        userEmail,
        status,
        quantity,
        total,
        products,
      })
        .then((cart) => {
          res.json({
            _id: cart._id,
            userEmail: cart.userEmail,
            status: cart.status,
            quantity: cart.quantity,
            total: cart.total,
            products: products,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  })
);

//get all cart
cartRoute.get(
  "/mycart",
  protect,
  assyncHandler(async (req, res) => {
    const { userEmail } = req.body;
    console.log(userEmail);
    const cart = await CartModel.findOne({ userEmail: userEmail });

    if (cart) {
      res.json({
        _id: cart._id,
        userEmail: cart.userEmail,
        status: cart.status,
        quantity: cart.quantity,
        total: cart.total,
        products: cart.products,
      });
    } else {
      res.status(404);
      throw new Error("Cart not found");
    }
  })
);

//delete cart
cartRoute.post(
  "/deletecart",
  protect,
  assyncHandler(async (req, res) => {
    const { userEmail } = req.body;
    console.log(userEmail);
    const cart = await CartModel.findOne({ userEmail: userEmail });

    if (cart) {
      await cart.deleteOne();
      res.json({
        message: "Delete successfully",
      });
    } else {
      res.status(404);
      throw new Error("Cart not found");
    }
  })
);

//delete oneproduct
cartRoute.delete(
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
//update userprofile
cartRoute.put(
  "/profile",
  protect,
  assyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        firstname: updateUser.firstname,
        lastname: updateUser.lastname,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        //token: generateToken(updateUser._id),
        createdAt: updateUser.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

//find user
cartRoute.post(
  "/finduser",
  protect,
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
cartRoute.post(
  "/changePassword",
  assyncHandler(async (req, res) => {
    const { email, newpassword, oldpassword } = req.body;
    const user = await UserModel.findOne({ email: email });
    console.log("found");
    console.log(newpassword);
    console.log(oldpassword);
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
            email: email,
            isChanged: true,
            password: hashpassword,
            currentPassword: user.password,
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
export default cartRoute;
