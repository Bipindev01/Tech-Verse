const Order = require("../models/order");


//Place Order
const placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user.id,
      products: req.body.products,
      totalAmount: req.body.totalAmount,
    });

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

//Logged-in User Orders
const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({
      user: req.user.id,
    })
      .populate("products.product")
      .populate("user", "name email");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const cancelOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  if (order.user.toString() !== req.user.id) {
    return res.status(403).json({
      message: "Not authorized",
    });
  }

  if (order.status !== "Pending") {
    return res.status(400).json({
      message: "Order cannot be cancelled after shipping.",
    });
  }

  order.status = "Cancelled";

  await order.save();

  res.json({
    success: true,
    message: "Order cancelled successfully.",
    order,
  });
};

//All Orders (Admin)
const getAllOrders = async (req, res) => {

  try {

    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product");

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

//Update Order Status
const updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    if (!order) {

      return res.status(404).json({
        message: "Order Not Found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Order Updated",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

//Delete Order
const deleteOrder = async (req, res) => {

  try {

    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {

      return res.status(404).json({
        message: "Order Not Found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Order Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
  cancelOrder,
};