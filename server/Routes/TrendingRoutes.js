import express from "express";
import assyncHandler from "express-async-handler";
import TrendingModel from "../models/TrendingModel.js";
const trendingRoute = express.Router();

trendingRoute.get(
  "/",
  assyncHandler(async (req, res) => {
    const trendingList = await TrendingModel.find({});
    res.json(trendingList);
  })
);
export default trendingRoute;
