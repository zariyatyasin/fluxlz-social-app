import User from "@/ApiHelper/model/User";
import connectDB from "@/ApiHelper/utlits";
import CryptoJS from "crypto-js";
const handler = async (req, res) => {
  connectDB();
  const { method } = req;
  //getSingleUser

  if (method === "GET") {
    try {
      const allUser = await User.find();
      return res.status(200).json(allUser);
    } catch (error) {}
  }
};

export default handler;
