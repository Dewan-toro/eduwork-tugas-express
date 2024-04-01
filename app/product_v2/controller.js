const fs = require("fs");
const path = require("path");
const Product = require("./model");

const store = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  } else {
    res.status(400).send({
      status: "error",
      response: "No file uploaded",
    });
    return;
  }
  try {
    const result = await Product.create({
      users_id,
      name,
      price,
      stock,
      status,
      image_url: `http://localhost:3000/public/${image.originalname}`,
    });
    res.send({
      status: "success",
      response: result,
    });
  } catch (error) {
    res.send({
      status: "error",
      response: error,
    });
  }
};

const index = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const view = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  } else {
    res.status(400).send({
      status: "error",
      response: "No file uploaded",
    });
    return;
  }
  try {
    const result = await Product.update({
      users_id,
      name,
      price,
      stock,
      status,
      image_url: `http://localhost:3000/public/${image.originalname}`,
    },
    {
      where: {
        id: req.params.id
      }
    });
    if (result[0] === 0) {
      return res.status(404).json({ error: "Product not found" });
    } else {
      res.json({ status: "success", response: result });
    }
  } catch (error) {
    res.send({ status: "error", response: error });
  }
};

const destroy = async (req, res) => {
  try {
    const result = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (result === 0) {
      return res.status(404).json({ error: "Product not found" });
    } else {
      res.json({ status: "success", response: result });
    }
  } catch (error) {
    res.send({ status: "error", response: error });
  }
}

module.exports = {
  store,
  index,
  view,
  update,
  destroy
};
