import express from "express";
import addressController from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter
  .route("/")
  .get(addressController.getAllAddresses)
  .post(addressController.createAddress);

addressRouter.route("/:id").patch(addressController.updateAddress);

export default addressRouter;
