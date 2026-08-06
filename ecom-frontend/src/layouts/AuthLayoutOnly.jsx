import { Outlet } from "react-router-dom";

function AuthLayoutOnly() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}

export default AuthLayoutOnly;