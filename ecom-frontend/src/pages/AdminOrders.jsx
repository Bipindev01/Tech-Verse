import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrders,
  changeOrderStatus,
} from "../redux/slices/orderSlice";

function AdminOrders() {
  const dispatch = useDispatch();

  const { orders, loading } = useSelector(
    (state) => state.orders
  );

  const [status, setStatus] = useState({});

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const handleUpdate = async (id) => {
    try {
      await dispatch(
        changeOrderStatus({
          id,
          status: status[id],
        })
      ).unwrap();

      alert("Order Updated Successfully!");
    } catch (error) {
      alert(error);
    }
  };

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Manage Orders
      </h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Customer</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Total</th>
            <th className="border p-3">Current Status</th>
            <th className="border p-3">Change Status</th>
            <th className="border p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border p-3">
                {order.user?.name}
              </td>

              <td className="border p-3">
                {order.user?.email}
              </td>

              <td className="border p-3">
                ₹{order.totalAmount}
              </td>

              <td className="border p-3">
                {order.status}
              </td>

              <td className="border p-3">
                <select
                  className="border p-2"
                  value={status[order._id] || order.status}
                  onChange={(e) =>
                    setStatus({
                      ...status,
                      [order._id]: e.target.value,
                    })
                  }
                >
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </td>

              <td className="border p-3">
                <button
                  onClick={() => handleUpdate(order._id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;