const express = require("express");

const router = express.Router();

const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controllers/productController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

// Public Routes
router.get("/", getProducts);

router.get("/search", searchProducts);

router.get("/:id", getSingleProduct);

// Admin Routes
router.post("/", protect, adminOnly, addProduct);

router.put("/:id", protect, adminOnly, updateProduct);

router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;