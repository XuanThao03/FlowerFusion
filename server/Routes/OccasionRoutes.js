import express from "express";
import assyncHandler from "express-async-handler";
import OccasionModel from "../models/OccasionModel.js";
const occasionRoute = express.Router();

occasionRoute.get(
  "/",
  assyncHandler(async (req, res) => {
    const occasionList = await OccasionModel.find({});
    res.json(occasionList);
  })
);
export default occasionRoute;
