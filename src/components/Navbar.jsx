import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-black.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/brands">
          <AiFillProduct />
          Brands
        </NavLink>
      </li>
      {user && user?.email && (
        <li>
          <NavLink to="/my-profile">
            <FaRegUserCircle />
            My Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about">
          <FaAddressBook />
          About Dev
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2 z-10"
          >
            {links}
          </ul>
        </div>
        <Link className="min-w-[150px] md:w-[250px]" to="/">
          <img src={logo} alt="discount-pro" className="w-full" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          // Logout & User profile & email
          <div className="flex items-center gap-2">
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <>
                <p className="text-sm md:flex hidden">{user?.email}</p>
                <div>
                  <img
                    src={user.photoURL}
                    className="w-9 h-9 rounded-full border-primary border-2 overflow-hidden object-cover cursor-pointer hover:opacity-75"
                    alt="userPhoto"
                  />
                </div>
                <button onClick={handleSignOut} className={`font-medium hover:text-primary`}>
                  Logout
                </button>
              </>
            )}
          </div>
        ) : (
          // Login || Register
          <ul className="flex items-center gap-2">
            <li>
              <NavLink
                to="/auth/login"
                className={`font-medium hover:text-primary`}
                id="auth-navbar"
              >
                Login
              </NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink
                to="/auth/register"
                className="font-medium hover:text-primary"
                id="auth-navbar"
              >
                Register
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
