import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white shadow rounded-lg p-6">
        <p className="mb-3">
          <strong>Name:</strong> {user.user.name}
        </p>

        <p className="mb-3">
          <strong>Email:</strong> {user.user.email}
        </p>

        <p>
          <strong>Role:</strong> {user.user.role}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;