import express from "express";
import UserModel from "./models/UserModel.js";
import users from "./data/users.js";
import flowers from "./data/flower.js";
import asyncHandler from "express-async-handler";
import FlowerModel from "./models/FlowerModel.js";
const ImportData = express.Router();

ImportData.post(
  "/users",
  asyncHandler(async (req, res) => {
    await UserModel.removeAllListeners({});
    const importUser = await UserModel.insertMany(users);
    res.send({ importUser });
  })
);
ImportData.post(
  "/flowers",
  asyncHandler(async (req, res) => {
    await FlowerModel.removeAllListeners({});
    const importFlower = await FlowerModel.insertMany(flowers);
    res.send({ importFlower });
  })
);

export default ImportData;
