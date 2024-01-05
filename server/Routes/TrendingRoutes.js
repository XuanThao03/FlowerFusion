import express from "express";
import assyncHandler from "express-async-handler";
import TrendingModel from "../models/TrendingModel.js";
import FlowerModel from "../models/FlowerModel.js";
const trendingRoute = express.Router();

trendingRoute.get(
  "/",
  assyncHandler(async (req, res) => {
    const trendingList = await FlowerModel.find({
      isTrending: true,
    });
    res.json(trendingList);
  })
);
export default trendingRoute;
