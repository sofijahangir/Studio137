const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  prodDesc: {
    type: String,
    // required: true,
  },
  prodPrice: {
    type: Number,
    // required: true,
  },
  prodQuantity: {
    type: Number,
    // required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
