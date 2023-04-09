import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const DisplayGrid = ({ grid, data }) => {
  const test = [1, 2, 3.4, 56, 6, 6, 6, 6, 6, 6, 6, 6];
  return (
    <div className="">
      <div className={`columns-2 md:columns-3  lg:columns-3 gap-6`}>
        {true ? (
          test?.map((item, id) => (
            <div
              className="relative mb-6 rounded-lg overflow-hidden  shadow   "
              key={id}
            >
              {/* <img className="w-full  d" src={data[id].image} /> */}
              <img
                className="w-full  d"
                src={`https://source.unsplash.com/random/${id}`}
              />
              <div className="w-full hidden md:flex absolute bottom-0    opacity-80 justify-between bg-white p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://source.unsplash.com/random/${id}`}
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold  text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>NO POST</div>
        )}
      </div>
    </div>
  );
};

export default DisplayGrid;
