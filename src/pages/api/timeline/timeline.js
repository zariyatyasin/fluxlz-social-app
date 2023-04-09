import Post from "@/ApiHelper/model/Post";
import User from "@/ApiHelper/model/User";
import connectDB from "@/ApiHelper/utlits";
//api/post
const handler = async (req, res) => {
  await connectDB();
  const { method } = req;

  if (method === "GET") {
    try {
      const currentUser = await User.findById(req.body.userId);
      const userPost = await Post.find({ userId: currentUser._id });

      const friendsPost = await Promise.all(
        currentUser.following.map((fridId) => {
          return Post.find({ userId: fridId });
        })
      );

      res.status(200).json(userPost.concat(...friendsPost));
    } catch (error) {
      res.status(200).json(error);
    }
  }
};

export default handler;
