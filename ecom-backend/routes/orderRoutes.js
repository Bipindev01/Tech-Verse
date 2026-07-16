const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

// User Routes
router.post("/", protect, placeOrder);

router.get("/myorders", protect, getMyOrders);

// Admin Routes
router.get("/", protect, adminOnly, getAllOrders);

router.put("/:id", protect, adminOnly, updateOrderStatus);

router.delete("/:id", protect, adminOnly, deleteOrder);

module.exports = router;