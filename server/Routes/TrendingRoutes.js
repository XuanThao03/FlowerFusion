import express from "express";
import assyncHandler from "express-async-handler";
import TrendingModel from "../models/TrendingModel.js";
import FlowerModel from "../models/FlowerModel.js";
import VaseModel from "../models/VaseModel.js";
import vaseRoute from "./VaseRoutes.js";
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
trendingRoute.post(
  "/addtype",
  assyncHandler(async (req, res) => {
    const data = VaseModel.updateMany(
      {},
      {
        $set: { type: "vase" },
      }
    )
      .then((obj) => {
        res.json({
          data,
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  })
);

export default trendingRoute;
