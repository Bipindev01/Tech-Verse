import axiosInstance from "../api/axiosInstance";

const placeOrder = async (orderData, token) => {
  const response = await axiosInstance.post(
    "/orders",
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

const getMyOrders = async (token) => {
  const response = await axiosInstance.get(
    "/orders/myorders",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.orders;
};

const cancelOrder = async (id, token) => {
  const response = await axiosInstance.put(
    `/orders/${id}/cancel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.order;
};

const getAllOrders = async (token) => {
  const response = await axiosInstance.get("/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.orders;
};

const updateOrderStatus = async (id, status, token) => {
  const response = await axiosInstance.put(
    `/orders/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.order;
};

const orderService = {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
};

export default orderService;