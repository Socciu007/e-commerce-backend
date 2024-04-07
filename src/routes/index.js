const UserRoute = require("./UserRoute");
const OrderRoute = require("./OrderRoute");
const ProductRoute = require("./ProductRoute");
const PaymentRouter = require("./PaymentRoute");
const StoreRouter = require("./StoreRoute");
const ReturnRouter = require("./ReturnRoute");

const routes = (app) => {
  app.use("/api/user", UserRoute);
  app.use("/api/product", ProductRoute);
  app.use("/api/order", OrderRoute);
  app.use("/api/payment", PaymentRouter);
  app.use("/api/store", StoreRouter);
  app.use("/api/return", ReturnRouter);
};

module.exports = routes;
