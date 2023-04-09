import Post from "@/ApiHelper/model/Post";
import User from "@/ApiHelper/model/User";
import connectDB from "@/ApiHelper/utlits";

const handler = async (req, res) => {
  connectDB();
  const {
    method,
    query: { username },
  } = req;

  //getSingleUser
  if (method === "GET") {
    try {
      const user = await User.findOne({ username });

      const posts = await Post.find({ userId: user._id });
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(200).json(error);
    }
  }
};

export default handler;
