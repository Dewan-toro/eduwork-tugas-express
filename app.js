const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require("morgan");
const productRouter = require("./app/product/routes");
const productRouterV2 = require("./app/product_v2/routes");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", productRouter);
app.use("/api/v2", productRouterV2);

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
