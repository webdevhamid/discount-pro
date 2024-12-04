import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
