import DisplayGrid from "@/components/DisplayGrid";
import Profile from "@/components/Profile";
import UserProfileCard from "@/components/UserProfileCard";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// export async function getServerSideProps({ params, req }) {
//   const session = await getSession({ req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   const res = await axios.get(`http://localhost:3000/api/profile/yasin`);

//   return {
//     props: { currentUserData: res.data, session }, // will be passed to the page component as props
//   };
// }

const user = ({ currentUserData }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (!session && status === "unauthenticated") {
  //     router.push("/api/auth/signin");
  //   }
  // }, [session, status]);
  // if (status === "loading" || !session) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <div className=" md:mr-8 md:ml-8 mx-auto mt-5 ">
        <div className=" ">
          <div className=" mt-24 ">{<UserProfileCard></UserProfileCard>}</div>
          <div className=" mt-10   ">
            <DisplayGrid data={currentUserData} grid={"4"}></DisplayGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default user;
