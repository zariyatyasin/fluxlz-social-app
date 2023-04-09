import React, { useState } from "react";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { model_Open } from "@/Redux/Global";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const Header = () => {
  const [nav, setNav] = useState(false);
  let router = useRouter();
  const { currentUser } = useSelector((state) => state.CurrentUser);
  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return "Loading or not authenticated...";
  }
  return (
    <div className=" bg-white fixed top-0 z-50 w-full">
      <div className=" mr-8 ml-8 mx-auto  relative h-20  flex items-center justify-between">
        <div className=" flex items-center">
          <Link
            href={"/"}
            className=" uppercase font-semibold font-medium text-xl text-gray-800 "
          >
            Fluxlz
          </Link>
        </div>

        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
          <Link
            href="/"
            className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
          >
            Blog
          </Link>
          <Link
            href="/news"
            className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
          >
            News
          </Link>
          <Link
            href="/trending"
            className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
          >
            Trending
          </Link>
        </div>

        {!session && status === "unauthenticated" && (
          <div className=" bg-white  w-9 h-9 flex justify-center items-center rounded-full  mr-8  ">
            <Link href={"/signup"}>Signin</Link>
          </div>
        )}
        {session && status === "authenticated" && (
          <div className="flex items-center">
            <div
              className=" bg-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full  mr-4  "
              onClick={() => dispatch(model_Open())}
            >
              <AddCircleOutlineOutlinedIcon
                sx={{ fontSize: "30px" }}
              ></AddCircleOutlineOutlinedIcon>
            </div>

            <div className="  cursor-pointer  mr-4 ">
              <MailOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
            </div>

            <div className=" relative">
              <button
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
                type="button"
                onMouseEnter={() => setNav(true)}
                onMouseLeave={() => setNav(false)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={session?.user?.image}
                  alt="user photo"
                />
              </button>
              <div
                className={`z-10 ${
                  nav ? "block" : "hidden"
                } absolute right-0 top-[30px]
             bg-white divide-y divide-gray-100   rounded-lg shadow w-44`}
                onMouseEnter={() => setNav(true)}
                onMouseLeave={() => setNav(false)}
              >
                <div className="px-4 py-3 text-sm text-gray-900  ">
                  <div>{session?.user?.name}</div>
                  <div className="font-medium truncate">
                    {session?.user?.email}
                  </div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li>
                    <Link
                      href={`/profile/${currentUser?.username}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                </ul>
                <div className="py-2" onClick={() => signOut()}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <nav className="relative bg-white shadow 800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="#">
                <img
                  className="w-auto h-6 sm:h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                />
              </a>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 y-200 hover:text-gray-600 xt-gray-400 focus:outline-none focus:text-gray-600 xt-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white 800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
                >
                  Join Slack
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
                >
                  Browse Topics
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
                >
                  Random Item
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 y-200 hover:bg-gray-100 -gray-700"
                >
                  Experts
                </a>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block y-200 hover:text-gray-700 xt-gray-400 focus:text-gray-700 xt-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2 text-gray-700 y-200 lg:hidden">
                    Khatab wedaa
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
