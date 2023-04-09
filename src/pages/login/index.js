import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const index = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const { data: session, status } = useSession();
  let router = useRouter();

  console.log("login", { session, status });

  useEffect(() => {
    if (session && status === "authenticated") {
      router.push("/");
    }
  }, [session, status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <div>
      <section className=" mt-10 ">
        <div className="flex flex-col items-center justify-center px-6 py-8   lg:py-0">
          <div className=" w-96 rounded-lg  d md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Username"
                    required=""
                    onChange={(e) => setusername(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full  bg-[#71E4D5] text-white rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <button
                  type="submit"
                  className="w-full  bg-[#71E4D5] text-white rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Login with google
                </button>

                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Signup
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
