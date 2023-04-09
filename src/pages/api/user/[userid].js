import User from "@/ApiHelper/model/User";
import connectDB from "@/ApiHelper/utlits";
import CryptoJS from "crypto-js";
const handler = async (req, res) => {
  connectDB();
  const {
    method,
    query: { userid },
  } = req;

  //getSingleUser
  if (method === "GET") {
    try {
      const user = await User.findById(userid);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(200).json(error);
    }
  }

  //updateUser
  if (method === "PUT") {
    const user = await User.findById(userid);

    if (!user) {
      return res.status(200).json("user does not exits");
    }
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        "iloveu"
      ).toString();
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        userid,
        {
          $set: req.body,
        },
        { new: true }
      );

      return res.status(200).json(updateUser);
    } catch (error) {
      return res.status(200).json(error);
    }
  }
};

export default handler;
