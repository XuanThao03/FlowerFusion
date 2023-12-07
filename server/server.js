import express from "express";
import flowers from "./data/flower.js";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import flowerRoute from "./Routes/FlowerRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRoute from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
//API
app.use("/api/import", ImportData);
app.use("/api/flowers", flowerRoute);
app.use("/api/users", userRoute);
app.use(notFound);
app.use(errorHandler);
//Load flower from server
// app.get("/api/flowers", async (req, res) => {
//   try {
//     //let result = await UserModel.find();
//     res.status(200).json(flowers);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// //Load sigle flower from server
// app.get("/api/flowers/:id", async (req, res) => {
//   try {
//     //let result = await UserModel.find((p) => p._id === req.params.id);
//     let result = flowers.find((p) => p._id == req.params.id);
//     console.log(result);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// app.post("/createUser", async (req, res) => {
//   // let collection = await db.collection("posts");
//   let newDocument = req.body;
//   console.log(newDocument);
//   // newDocument.date = new Date();
//   let result = await UserModel.create(newDocument);
//   await result.save();
//   res.send(result).status(204);
// });

// app.get("/", (req, res) => {
//   res.send("API is Running...");
// });

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server run in port ${PORT}`));
