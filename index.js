const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const serviceRoute = require("./routes/service");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfully!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(cors());
  app.use(express.json());
  app.use("/api/auth", authRoute);  
  app.use("/api/users", userRoute);
  app.use("/api/services", serviceRoute);
  // app.use("/api/carts", cartRoute);
  // app.use("/api/orders", orderRoute);
  // app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});