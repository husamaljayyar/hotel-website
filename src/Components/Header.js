import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Redux/User/userActions";
import { getUser } from "../Redux/User/userSlice";

export const Header = ({ header }) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <header
      className={`${header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"}
     fixed z-50 w-full transition-all duration-500 `}
    >
      <div
        className="container mx-auto flex flex-col items-center gap-y-6 
      lg:flex-row lg:justify-between lg:gap-y-0"
      >
        {/* Logo */}
        <a href="/">
          {header ? (
            <div className="flex flex-row">
              <img className="w-[35px] h-[35px]" src={"/logo.png"} />
              <p className="text-xl  uppercase ml-2 font-light pt-2">hotel</p>
            </div>
          ) : (
            <div className="flex flex-row">
              <img className="w-[35px] h-[35px]" src={"/logo.png"} />{" "}
              <p className="text-lg  uppercase ml-2 font-light pt-[0.4rem] text-white">
                hotel
              </p>
            </div>
          )}
        </a>

        {/* nav */}
        <nav
          className={`${header ? "text-primary" : "text-white"}
          flex gap-x-4 font-tertiary  tracking-[3px] text-[15px]
          items-center uppercase lg-gap-x-8 `}
        >
          <p className="hover:text-accent transition">
            <Link to="/">Home</Link>
          </p>
          <p className="hover:text-accent transition">
            <a href="#rooms">Rooms</a>
          </p>
          <p className="hover:text-accent transition">
            <a href="#restaurant">restaurant</a>
          </p>

          <p className="hover:text-accent transition">
            {/* Login */}

            {state.user.user.token ? (
              <Link
                className="hover:text-accent transition"
                onClick={() => dispatch(handleLogout)}
              >
                Logout
              </Link>
            ) : (
              <Link
                className={header ? "text-black" : "text-white"}
                to="/login"
              >
                {" "}
                Login{" "}
              </Link>
            )}
          </p>
        </nav>
      </div>
    </header>
  );
};
