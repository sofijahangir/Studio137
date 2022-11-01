// Product Master Controller
const Product = require('../models/products');

const addProduct = async (req, res) => {
  const { productName, prodDesc, prodPrice, prodQuantity } = req.body;

  // console.log('Hello Product');

  const product = new Product({
    productName,
    prodDesc,
    prodPrice,
    prodQuantity,
  });

  try {
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addProduct, getProducts };
