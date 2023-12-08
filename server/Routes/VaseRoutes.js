import express from "express";
import assyncHandler from "express-async-handler";
import VaseModel from "../models/VaseModel.js";
const vaseRoute = express.Router();

vaseRoute.get(
  "/",
  assyncHandler(async (req, res) => {
    const vaseList = await VaseModel.find({});
    res.json(vaseList);
  })
);
export default vaseRoute;
