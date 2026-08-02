import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/slices/cartSlice";
import { createOrder } from "../redux/slices/orderSlice";

function Cart() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
  const orderData = {
    products: cartItems.map((item) => ({
      product: item._id,
      quantity: item.quantity,
    })),
    totalAmount: totalPrice,
  };

  const result = await dispatch(createOrder(orderData));

  if (createOrder.fulfilled.match(result)) {
    alert("Order Placed Successfully!");

    dispatch(clearCart());

    navigate("/myorders");
  } else {
    alert(result.payload || "Failed to place order");
  }
};

  if (cartItems.length === 0) {
    return (
      <h2 className="text-center mt-20 text-3xl">
        Your Cart is Empty
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (

        <div
          key={item._id}
          className="flex items-center justify-between border rounded-lg p-4 mb-4"
        >

          <div className="flex items-center gap-4">

            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div>

              <h2 className="text-xl font-semibold">
                {item.name}
              </h2>

              <p>₹ {item.price}</p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item._id))
              }
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item._id))
              }
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>

          </div>

          <button
            onClick={() =>
              dispatch(removeFromCart(item._id))
            }
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>

        </div>

      ))}

      <div className="text-right mt-8">

        <h2 className="text-3xl font-bold">
          Total: ₹ {totalPrice}
        </h2>

        <button 
        onClick={handleCheckout}
        className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
          Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;