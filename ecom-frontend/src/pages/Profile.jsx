import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { useState } from "react";

import {
  FaUserCircle,
  FaEnvelope,
  FaUserShield,
  FaShoppingCart,
  FaSignOutAlt,
  FaEdit,
  FaCrown,
  FaUser,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [activeTab, setActiveTab] = useState("profile");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const stats = [
    { label: "Cart Items", value: cartItems.length, icon: FaShoppingCart, color: "bg-blue-500" },
    { label: "Account Type", value: user.user.role, icon: FaCrown, color: "bg-purple-500" },
    { label: "Member Since", value: "January 2024", icon: FaCalendarAlt, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600 mt-1">Manage your account information and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Profile Card - Left Sidebar */}
          <div className="lg:col-span-1 h-fit">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
                    {getInitials(user.user.name)}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-sm hover:shadow-md transition">
                    <FaEdit className="text-gray-600 text-xs" />
                  </button>
                </div>
                
                <h2 className="mt-3 text-lg font-bold text-gray-800">{user.user.name}</h2>
                <p className="text-gray-500 text-xs capitalize bg-gray-100 px-3 py-1 rounded-full mt-1">{user.user.role}</p>
                
                <div className="w-full mt-4 pt-4 border-t border-gray-100">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-600 text-xs">
                      <FaEnvelope className="text-blue-500 flex-shrink-0" />
                      <span className="truncate">{user.user.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-xs">
                      <FaUserShield className="text-purple-500 flex-shrink-0" />
                      <span>Member</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 transition-all text-sm font-medium"
                >
                  <FaSignOutAlt className="text-sm" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content - Right Side */}
          <div className="lg:col-span-3">
            
            {/* Stats Cards - Fixed Alignment */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <stat.icon className="text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                    <p className="text-base font-semibold text-gray-800">
                      {typeof stat.value === 'number' ? stat.value : stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs Container - Fixed Width */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTab === "profile"
                        ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50/50"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    Profile Information
                  </button>
                  <button
                    onClick={() => setActiveTab("cart")}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTab === "cart"
                        ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50/50"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    Shopping Cart ({cartItems.length})
                  </button>
                </div>
              </div>

              <div className="p-5">
                {activeTab === "profile" && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                        <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 bg-gray-50">
                          <FaUser className="text-gray-400 mr-2 text-sm flex-shrink-0" />
                          <span className="text-gray-800 text-sm">{user.user.name}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Email Address</label>
                        <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 bg-gray-50">
                          <FaEnvelope className="text-gray-400 mr-2 text-sm flex-shrink-0" />
                          <span className="text-gray-800 text-sm">{user.user.email}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Account Type</label>
                        <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 bg-gray-50">
                          <FaUserShield className="text-gray-400 mr-2 text-sm flex-shrink-0" />
                          <span className="text-gray-800 text-sm capitalize">{user.user.role}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number</label>
                        <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 bg-gray-50">
                          <FaPhone className="text-gray-400 mr-2 text-sm flex-shrink-0" />
                          <span className="text-gray-800 text-sm">+1 (555) 123-4567</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Address</label>
                      <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 bg-gray-50">
                        <FaMapMarkerAlt className="text-gray-400 mr-2 text-sm flex-shrink-0" />
                        <span className="text-gray-800 text-sm">123 Main Street, New York, NY 10001</span>
                      </div>
                    </div>

                    <div className="flex justify-end pt-2 border-t border-gray-100 mt-4">
                      <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "cart" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-800">Your Cart Items</h3>
                      <span className="text-xs text-gray-500">{cartItems.length} items</span>
                    </div>
                    
                    {cartItems.length > 0 ? (
                      <div className="space-y-3">
                        {Array.from({ length: Math.min(cartItems.length, 3) }).map((_, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-800 text-sm">Product {index + 1}</h4>
                                <p className="text-xs text-gray-500">Quantity: 1</p>
                              </div>
                            </div>
                            <p className="font-semibold text-gray-800 text-sm">$99.99</p>
                          </div>
                        ))}
                        {cartItems.length > 3 && (
                          <p className="text-center text-gray-500 text-xs">
                            + {cartItems.length - 3} more items
                          </p>
                        )}
                        
                        <div className="pt-3 border-t border-gray-200">
                          <button className="w-full py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium">
                            View Full Cart
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <FaShoppingCart className="text-3xl text-gray-300 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">Your cart is empty</p>
                        <button className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium">
                          Start Shopping
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;