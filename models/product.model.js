const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create a new schema for the product model
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

// Create the product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;