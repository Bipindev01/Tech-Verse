import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyOrders, cancelOrder } from "../redux/slices/orderSlice";

function MyOrders() {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-center mt-20 text-3xl">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-20 text-red-500">{error}</h2>;
  }

  if (orders.length === 0) {
    return <h2 className="text-center mt-20 text-3xl">No Orders Found</h2>;
  }
  

  const handleCancel = async (id) => {
  if (!window.confirm("Are you sure you want to cancel this order?")) {
    return;
  }

  try {
    await dispatch(cancelOrder(id)).unwrap();

    alert("Order cancelled successfully!");
  } catch (error) {
    alert(error);
  }
};

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>

      {orders.map((order) => (
        <div key={order._id} className="border rounded-lg shadow-md p-6 mb-6">
          <h2 className="font-semibold text-xl">Order ID: {order._id}</h2>

          <p className="mt-2">
            <strong>Status:</strong> {order.status}
          </p>

          <p className="mt-2">
            <strong>Total:</strong> ₹ {order.totalAmount}
          </p>

          <h3 className="font-semibold mt-4 mb-2">Products</h3>

          {order.products.map((item, index) => (
            <div
              key={item.product?._id || index}
              className="flex justify-between border-b py-2"
            >
              <span>{item.product?.name || "Product Removed"}</span>

              <span>Qty: {item.quantity}</span>
            </div>
          ))}

          {order.status === "Pending" && (
            <button
              onClick={() => handleCancel(order._id)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyOrders;
