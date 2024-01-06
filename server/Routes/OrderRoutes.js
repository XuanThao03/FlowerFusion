import express from "express";
import assyncHandler from "express-async-handler";
import OrderModel from "../models/OrderModel.js";
import protect from "../Middleware/AuthMiddleware.js";
const orderRoute = express.Router();

//auto increase order number
function getNextSequence(name) {
  var ret = OrderModel.updateOne(
    {
      name: name,
    },
    {
      $inc: {
        num: 1,
      },
    }
  );
}

//push order
orderRoute.post(
  "/",
  assyncHandler(async (req, res) => {
    const {
      userEmail,
      contact,
      name,
      company,
      address,
      phone,
      isNewOffer,
      isSpecialOffer,
      payment,
      total,
      discount,
      quantity,
      status,
      products,
    } = req.body;

    console.log(req.body);
    //getNextSequence("orderid");
    const orderid = await OrderModel.findOne({ name: "orderID" });
    //console.log(orderid);
    const order = await OrderModel.create({
      num: orderid.num,
      userEmail,
      contact,
      name,
      company,
      address,
      phone,
      isNewOffer,
      isSpecialOffer,
      payment,
      total,
      discount,
      quantity,
      status,
      products,
    }).catch((err) => {
      console.error(err);
    });
    if (order) {
      res.status(201).json({
        _id: order._id,
        num: order.num,
        userEmail: order.userEmail,
        email_contact: order.email_contact,
        mobile_contact: order.mobile_contact,
        name: order.name,
        company: order.company,
        address: order.address,
        phone: order.phone,
        isNewOffer: order.isNewOffer,
        isSpecialOffer: order.isSpecialOffer,
        payment: order.payment,
        total: order.total,
        discount: order.discount,
        quantity: order.quantity,
        products: order.products,
      });
      order;
    } else {
      res.status(400);
      throw new Error("Invalid Order Data");
    }
  })
);

//delete
orderRoute.delete(
  "/delete",
  assyncHandler(async (req, res) => {
    const order = await OrderModel.findOne({ name: req.body.name });

    if (!order) {
      res.status(400);
      throw new Error("order not found");
    }

    await order.deleteOne();

    res.status(200).json({ name: req.params.name });
  })
);

// increase num
orderRoute.post(
  "/increase",
  assyncHandler(async (req, res) => {
    OrderModel.updateOne(
      {
        name: "orderID",
      },
      {
        $inc: {
          num: 1,
        },
      }
    )
      .then((obj) => {
        // res.redirect("/");
        // getNextSequence();
        console.log("Increased num");
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  })
);

//get history
orderRoute.post(
  "/getorders",
  protect,
  assyncHandler(async (req, res) => {
    console.log(req.body);
    const orderList = await OrderModel.find({ userEmail: req.body.userEmail });
    res.json(orderList);
  })
);
export default orderRoute;
