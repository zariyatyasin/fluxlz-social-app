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
      try {
        const currentuser = await User.findById(userid);
        const user = await User.findById(req.body.userId);

        if (currentuser.following.includes(req.body.userId)) {
          await currentuser.updateOne({
            $pull: { following: req.body.userId },
          });
          await user.updateOne({
            $push: { followers: userid },
          });
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(403).json("you dont follow this user");
        }
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(200).json("you cant unfollow yourself");
    }
  }
};
export default handler;
