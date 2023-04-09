import User from "@/ApiHelper/model/User";
import connectDB from "@/ApiHelper/utlits";
import CryptoJS from "crypto-js";
const handler = async (req, res) => {
  connectDB();
  const {
    method,
    query: { userid },
  } = req;

  //follow user
  if (method === "PUT") {
    if (userid !== req.body.userId) {
      const currentuser = await User.findById(userid);
      const user = await User.findById(req.body.userId);

      if (!currentuser.following.includes(req.body.userId)) {
        await currentuser.updateOne({ $push: { following: req.body.userId } });
        await user.updateOne({
          $push: { followers: userid },
        });
      } else {
        res.status(403).json("you allready follow this user");
      }

      res.status(403).json("followed");
    } else {
      res.status(200).json("you can't yourself");
    }
  }
};
export default handler;
