require("./config/mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require("morgan");
const path = require("path");
// const productRouter = require("./app/product/routes");
// const productRouterV2 = require("./app/product_v2/routes");
// const productRouterV3 = require("./app/product_v3/routes");
const productRouterV4 = require("./app/product_v4/routes");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
// app.use("/api/v1", productRouter);
// app.use("/api/v2", productRouterV2);
// app.use("/api/v3", productRouterV3);
app.use("/api/v4", productRouterV4);

app.use((req, res, next) => {
  res.status(404).send;
  ({
    status: "failed",
    message: "Resource" + req.originalUrl + "Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
