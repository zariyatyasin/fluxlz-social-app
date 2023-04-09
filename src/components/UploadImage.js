import { model_Open } from "@/Redux/Global";
import axios from "axios";
import Image from "next/image";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UploadImage = () => {
  const { currentUser } = useSelector((state) => state.CurrentUser);
  const [file, setFile] = useState();

  const { modelOpen } = useSelector((state) => state.GlobaleState);

  const desc = "ljkldjlks";
  const dispatch = useDispatch();
  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "postupload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ddrjnijut/image/upload",
        data
      );
      const { url } = uploadRes.data;
      console.log(url);
      await axios.post("http://localhost:3000/api/post/", {
        userId: currentUser.id,
        desc,
        image: url,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={` ${
        modelOpen ? "flex" : "hidden"
      }    z-50  justify-center items-center fixed top-0 right-0 bottom-0 left-0`}
    >
      <div
        className=" absolute  w-full bg-slate-900 top-0 min-h-screen opacity-70 "
        onClick={() => dispatch(model_Open())}
      ></div>
      <div className="bg-white z-50  overflow-hidden roud text-center flex">
        <div>
          {file ? (
            <div>
              <div>
                <div className="border border-red-500 text-right">Share</div>
                <Image
                  src={"/image/person.webp"}
                  width={600}
                  height={400}
                ></Image>
              </div>
              <div>
                <textarea
                  id="message"
                  rows="4"
                  className=" w-full   text-sm text-gray-900 "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
          ) : (
            <div className=" flex p-6">
              <label
                htmlFor="upload"
                className="block text-white bg-blue-400 font-medium rounded-lg text-sm   items-center px-5 py-2.5 text-center mr-2"
              >
                Upload From Device
              </label>
              <input
                id="upload"
                type="file"
                className=" hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label className="block text-white bg-blue-400 font-medium rounded-lg text-sm   items-center px-5 py-2.5 text-center mr-2">
                Genarate AI
              </label>
            </div>
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default UploadImage;
