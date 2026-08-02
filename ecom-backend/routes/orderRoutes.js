const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
  cancelOrder,
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

router.put("/:id/cancel", protect, cancelOrder);

module.exports = router;