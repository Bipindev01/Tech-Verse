import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Deals from "./pages/Deals";
import NewArrivals from "./pages/NewArrivals";
import Support from "./pages/Support";
import AuthLayoutOnly from "./layouts/AuthLayoutOnly";

import AdminRoute from "./components/AdminRoute";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";

const router = createBrowserRouter([
  // ===========================
  // Main Website
  // ===========================
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
      },

      {
        path: "product/:id",
        element: <ProductDetails />,
      },

      {
        path: "deals",
        element: <Deals />,
      },

      {
        path: "new-arrivals",
        element: <NewArrivals />,
      },

      {
        path: "support",
        element: <Support />,
      },

      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },

      {
        path: "myorders",
        element: (
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        ),
      },

      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      {
        path: "contact",
        element: <Support />,
      },

      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          </ProtectedRoute>
        ),
      },

      {
        path: "admin/products",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          </ProtectedRoute>
        ),
      },

      {
        path: "admin/products/add",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          </ProtectedRoute>
        ),
      },

      {
        path: "admin/products/edit/:id",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <EditProduct />
            </AdminRoute>
          </ProtectedRoute>
        ),
      },

      {
        path: "admin/orders",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <AdminOrders />
            </AdminRoute>
          </ProtectedRoute>
        ),
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // ===========================
  // Authentication Pages
  // ===========================
  {
    path: "/",
    element: <AuthLayoutOnly />,
    children: [
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
