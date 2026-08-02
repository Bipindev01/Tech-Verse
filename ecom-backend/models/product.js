const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
    },

    // NEW
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },

    // NEW
    discountPrice: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      required: [true, "Stock is required"],
      default: 0,
    },

    image: {
      type: String,
      default: "",
    },

    // NEW
    isDeal: {
      type: Boolean,
      default: false,
    },

    // NEW
    isNewArrival: {
      type: Boolean,
      default: false,
    },

    // NEW
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);