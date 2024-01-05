import express from "express";
import assyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../Middleware/AuthMiddleware.js";
import bcrypt from "bcrypt";
import CartModel from "../models/Cart.js";
import OrderModel from "../models/OrderModel.js";

const cartRoute = express.Router();

//insert
cartRoute.post(
  "/insert",
  protect,
  assyncHandler(async (req, res) => {
    const { userEmail, quantity, total, products } = req.body;
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
      OrderModel.updateOne(
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
        quantity,
        total,
        products,
      })
        .then((cart) => {
          res.json({
            _id: cart._id,
            userEmail: cart.userEmail,
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
  "/deleteproduct",
  protect,
  assyncHandler(async (req, res) => {
    const { userEmail, nameProduct, isRemoved } = req.body;
    console.log(userEmail);
    if (isRemoved) {
      CartModel.updateOne(
        {
          userEmail: userEmail,
        },
        {
          $pull: {
            // Specify the condition to remove the item from the array
            products: {
              name: nameProduct,
            },
          },
        }
      )
        .then((cart) => {
          res.json({
            productName: nameProduct,
            message: "Remove product successfully",
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      CartModel.updateOne(
        {
          userEmail: userEmail,
          products: {
            $elemMatch: {
              name: nameProduct,
            },
          },
        },
        {
          $inc: {
            "products.$.quantity": -1,
          },
        }
      )
        .then((cart) => {
          res.json({
            productName: nameProduct,
            message: "Decrease product quantity successfully",
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  })
);

//update cart
cartRoute.post(
  "/update",
  protect,
  assyncHandler(async (req, res) => {
    const { userEmail, quantity, total, products } = req.body;
    const cart = await CartModel.findOne({ userEmail });

    if (cart) {
      await cart.deleteOne().then(console.log("Delete old cart"));
    }
    const cartNew = await CartModel.create({
      userEmail,
      quantity,
      total,
      products,
    })
      .then((cart) => {
        res.json({
          _id: cart._id,
          userEmail: cart.userEmail,
          quantity: cart.quantity,
          total: cart.total,
          products: cart.products,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  })
);

export default cartRoute;
