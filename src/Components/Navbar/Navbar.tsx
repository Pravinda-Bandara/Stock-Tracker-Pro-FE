import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="p-6 bg-white w-full px-[35px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded-lg text-white bg-green-500 hover:bg-white  hover:text-green-500 border border-green-500"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded-lg text-white bg-green-500 hover:bg-white  hover:bg-white hover:text-green-500 border-green-500"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
