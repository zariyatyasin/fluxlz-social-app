import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import Following from "./Story";
const Profile = () => {
  const { data: session, status } = useSession();

  return (
    <div className=" bg-white shadow rounded-lg w-full   ">
      <div className="flex items-center flex-col mt-10   ">
        <div className=" s   ">
          <div className="flex flex-col gap-1 text-center items-center">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
              src={`${session ? session.user?.image : "/image/profile.webp"}`}
              alt=""
            />
            <p className="font-semibold">{session?.user?.name}</p>
            <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
              {session?.user?.email}
            </div>
          </div>
          {!session ? (
            <div className="   text-white  mb-3 rounded p-2  flex justify-center items-center   bg-[#71E4D5]">
              <Link href={"/signup"}>Signin</Link>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 my-3">
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Posts</span>
              </div>
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Followers</span>
              </div>
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Folowing</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
