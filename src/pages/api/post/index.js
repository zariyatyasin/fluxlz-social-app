import Post from "@/ApiHelper/model/Post";
import connectDB from "@/ApiHelper/utlits";
//api/post
const handler = async (req, res) => {
  await connectDB();
  const { method } = req;

  if (method === "POST") {
    const newPost = new Post(req.body);
    try {
      const savePost = await newPost.save();
      res.status(200).json(savePost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;

// import Post from "@/ApiHelper/model/Post";
// import connectDB from "@/ApiHelper/utlits";
// import cloudinary from "@/ApiHelper/uploadImage";
// //api/post
// const handler = async (req, res) => {
//   await connectDB();
//   const { method } = req;

//   if (method === "POST") {
//     const { userId, desc, image } = req.body;

//     try {
//       if (image) {
//         const uploadImage = await cloudinary.uploader.upload(image, {
//           upload_preset: "postupload",
//         });
//         if (uploadImage) {
//           const newPost = new Post({ image: uploadImage, userId, desc });
//           const savePost = await newPost.save();
//           res.status(200).json(savePost);
//         }
//       }
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// };

// export default handler;
