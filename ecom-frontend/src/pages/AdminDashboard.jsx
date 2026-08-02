import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Total Products</h2>

          <p className="text-4xl mt-4 font-bold">--</p>
        </div>

        <div className="bg-green-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Total Orders</h2>

          <p className="text-4xl mt-4 font-bold">--</p>
        </div>

        <div className="bg-yellow-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Revenue</h2>

          <p className="text-4xl mt-4 font-bold">₹0</p>
        </div>

        <div className="mt-10">
          <Link
            to="/admin/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Manage Products
          </Link>
        </div>

        <div className="mt-10">
          <Link
            to="/admin/orders"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Manage Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
