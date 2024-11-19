import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-bgBlack shadow-md px-6 lg:px-[35px]">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-20">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Auth Section */}
          {isLoggedIn() ? (
            <div className="hidden lg:flex items-center space-x-6 text-textWhite">
              <div className="hover:text-darkBlue text-textGray4">
                Welcome, {user?.userName}
              </div>
              <button
                onClick={logout}
                className="px-8 py-3 font-bold rounded-lg text-white bg-bgGreen5 hover:bg-white hover:text-green-500 border border-bgGreen5"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center space-x-6 text-textWhite">
              <Link to="/login" className="hover:text-darkBlue">
                Login
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 font-bold rounded-lg text-white bg-green-500 hover:bg-white hover:text-green-500 border border-green-500"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to account for Navbar height */}
      <div className="h-[64px]" />
    </>
  );
};

export default Navbar;
