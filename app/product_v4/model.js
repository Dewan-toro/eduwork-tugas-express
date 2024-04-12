const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "Product name must be at least 3 characters"],
    maxlength: [50, "Product name must be at most 50 characters"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [1000, "Product price must be at least 0"],
  },
  stock: {
    type: Number,
    required: [true, "Product stock is required"],
    min: [0, "Product stock must be at least 0"],
  },
  status: {
    type: Boolean,
    default: true,
    required: [true, "Product status is required"],
  },
  image_url: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
