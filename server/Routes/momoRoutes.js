import express from "express";
import assyncHandler from "express-async-handler";
import TrendingModel from "../models/TrendingModel.js";
import FlowerModel from "../models/FlowerModel.js";
import VaseModel from "../models/VaseModel.js";
import vaseRoute from "./VaseRoutes.js";
const momoRoute = express.Router();

momoRoute.post("/payment", JWTauthenticationMiddleware, async (req, res) => {
  const { total } = req.body;
  //   const { _id } = req.user;
  //   const { json } = req.body;
  //   // Lặp qua mỗi đối tượng trong mảng
  //   let total = 0;
  //   var ticketArray12 = [];
  //   for (const item of json) {
  //     const { ticketId, showtimeId, seatId, price } = item;

  //     // Xử lý mỗi đối tượng
  //     console.log(
  //       `ticketId: ${ticketId}, showtimeId: ${showtimeId}, seatId: ${seatId}, price: ${price}`
  //     );
  //     total = total + price;
  //     ticketArray12.push({ _id, ticketId, showtimeId, seatId });
  //   }
  //   console.log("ddaaay: ", ticketArray12);
  //   const abc = JSON.stringify(ticketArray12);
  try {
    // Handle the payment response from MoMo
    console.log("Received payment callback from MoMo:");
    console.log(req.body);
    const partnerCode = "MOMO";
    const accessKey = "F8BBA842ECF85";
    const secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    const requestId = partnerCode + new Date().getTime();
    const orderId = requestId;
    const orderInfo = "pay with MoMo";
    const redirectUrl = "https://momo.vn/return";
    const ipnUrl = `http://localhost:3000/`;
    //console.log(ipnUrl);
    const amount = total;
    const extraData = "";
    const requestType = "captureWallet";

    const rawSignature =
      "accessKey=" +
      accessKey +
      "&amount=" +
      amount +
      "&extraData=" +
      extraData +
      "&ipnUrl=" +
      ipnUrl +
      "&orderId=" +
      orderId +
      "&orderInfo=" +
      orderInfo +
      "&partnerCode=" +
      partnerCode +
      "&redirectUrl=" +
      redirectUrl +
      "&requestId=" +
      requestId +
      "&requestType=" +
      requestType;

    const signature = crypto
      .createHmac("sha256", secretkey)
      .update(rawSignature)
      .digest("hex");

    const requestBody = JSON.stringify({
      partnerCode: partnerCode,
      accessKey: accessKey,
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      extraData: extraData,
      requestType: requestType,
      signature: signature,
      lang: "en",
    });

    const options = {
      hostname: "test-payment.momo.vn",
      port: 443,
      path: "/v2/gateway/api/create",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(requestBody),
      },
    };

    const paymentRequest = https.request(options, (response) => {
      console.log(`Status: ${response.statusCode}`);
      console.log(`Headers: ${JSON.stringify(response.headers)}`);
      response.setEncoding("utf8");
      let responseBody = "";

      response.on("data", (chunk) => {
        responseBody += chunk;
      });

      response.on("end", () => {
        console.log("No more data in response.");
        const payUrl = JSON.parse(responseBody).payUrl;
        res.json({
          status: 0,
          message: "Payment link generated successfully",
          payUrl: payUrl,
        });
      });
    });

    paymentRequest.on("error", (e) => {
      console.log(`Problem with request: ${e.message}`);
      // Send an error response
      res.json({
        status: 1,
        message: "Error generating payment link",
      });
    });

    console.log("Sending....");
    paymentRequest.write(requestBody);
    paymentRequest.end();
  } catch (error) {
    console.error("Error processing MoMo payment callback:", error);
    // Send an error response
    res.json({
      status: 1,
      message: "Error processing payment callback",
    });
  }
});

export default momoRoute;
