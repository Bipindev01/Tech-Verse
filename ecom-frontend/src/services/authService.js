import axiosInstance from "../api/axiosInstance";

const register = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axiosInstance.post("/auth/login", userData);

  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

// --- NEW: Update Profile Method ---
const updateProfile = async (userData) => {
  // Get the current user from localStorage to extract the token
  const user = JSON.parse(localStorage.getItem("user"));
  
  // Send the update request
  const response = await axiosInstance.put("/users/update", userData, {
    headers: {
      Authorization: `Bearer ${user?.token}`, // Add token to request header
    },
  });

  // If successful, update localStorage with the new user data
  if (response.data) {
    // Make sure to preserve the token and other important fields
    const updatedUser = {
      ...user,
      ...response.data, // Merge existing user with updated fields
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return response.data;
};

const authService = {
  register,
  login,
  logout,
  updateProfile, // <--- Add this
};

export default authService;