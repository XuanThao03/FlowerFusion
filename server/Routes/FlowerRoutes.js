import express from "express";
import assyncHandler from "express-async-handler";
import FlowerModel from "../models/FlowerModel.js";
const flowerRoute = express.Router();

flowerRoute.get(
  "/",
  assyncHandler(async (req, res) => {
    const flowertList = await FlowerModel.find({});
    res.json(flowertList);
  })
);
export default flowerRoute;
