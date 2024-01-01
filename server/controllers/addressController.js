import AddressModel from "../models/AddressModel.js";
// import CandleModel from "../models/CandleModel.js";

const addressController = {};

addressController.updateAddress = async (req, res, next) => {
  try {
    const doc = await AddressModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      data: {
        data: err,
      },
    });
  }
};

addressController.getAllAddresses = async (req, res, next) => {
  try {
    const doc = await AddressModel.find({});

    //Send response
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      data: err,
    });
  }
};

addressController.createAddress = async (req, res, next) => {
  try {
    const newDoc = await AddressModel.create(req.body);

    res.status(201).json({
      status: "success",
      data: newDoc,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      data: err,
    });
  }
};

export default addressController;
