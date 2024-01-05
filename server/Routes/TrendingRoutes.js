import express from "express";
import assyncHandler from "express-async-handler";
import TrendingModel from "../models/TrendingModel.js";
import FlowerModel from "../models/FlowerModel.js";
import VaseModel from "../models/VaseModel.js";
const trendingRoute = express.Router();

trendingRoute.get(
  "/",
  assyncHandler(async (req, res) => {
    const [flowerResults, vaseResults] = await Promise.all([
      FlowerModel.find({ isTrending: true }),
      VaseModel.find({ isTrending: true }),
    ]);

    const trendingList = [...flowerResults, ...vaseResults];

    res.json(trendingList);
  })
);

export default trendingRoute;
