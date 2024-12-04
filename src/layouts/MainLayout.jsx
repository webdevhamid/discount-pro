import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-292px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
