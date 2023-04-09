import Post from "@/ApiHelper/model/Post";
import connectDB from "@/ApiHelper/utlits";
//api/post
const handler = async (req, res) => {
  await connectDB();
  const {
    method,
    query: { postid },
  } = req;

  if (method === "GET") {
    console.log(postid);
    try {
      const getPost = await Post.findById(postid);
      res.status(200).json(getPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const getPost = await Post.findById(postid);

      if (getPost.userId === req.body.userId) {
        await getPost.updateOne({ $set: req.body });
      } else {
        res.status(500).json("You can't edit someone else post");
      }

      res.status(200).json(getPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
