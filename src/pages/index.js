import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import DisplayGrid from "@/components/DisplayGrid";
import Profile from "@/components/Profile";
import Story from "@/components/Story";
import FollowList from "@/components/FollowList";
import { useSelector } from "react-redux";

import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
// export async function getServerSideProps({ params }) {
//   const res = await axios.get(`http://localhost:3000/api/post/timeline`);

//   return {
//     props: { currentUserData: res.data }, // will be passed to the page component as props
//   };
// }
export default function Home() {
  const { currentUser } = useSelector((state) => state.CurrentUser);

  return (
    <>
      <main className=" md:mr-8 md:ml-8 mx-auto mt-5 ">
        <div className="flex p-5 md:p-0">
          <div className=" hidden    fixed w-72  h-screen    mt-20   md:flex flex-col  items-center ">
            <Profile></Profile>
            <Story></Story>
            <FollowList></FollowList>
          </div>
          <div></div>
          <div className=" md:ml-80 mt-20   ">
            <DisplayGrid grid={"3"}> </DisplayGrid>
          </div>
        </div>
      </main>
    </>
  );
}
