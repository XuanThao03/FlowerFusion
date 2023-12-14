import express from "express";
import assyncHandler from "express-async-handler";
import CandleModel from "../models/CandleModel.js";
const candleRoute = express.Router();

candleRoute.get(
  "/",
  assyncHandler(async (req, res) => {
    const candleList = await CandleModel.find({});
    res.json(candleList);
  })
);
export default candleRoute;
