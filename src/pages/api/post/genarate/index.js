import Post from "@/ApiHelper/model/Post";
import connectDB from "@/ApiHelper/utlits";
import { Configuration, OpenAIApi } from "openai";
//api/post
const handler = async (req, res) => {
  await connectDB();
  const { method } = req;

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  if (method === "POST") {
    try {
      const { prompt } = req.body;

      const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      });

      const image = aiResponse.data.data[0].b64_json;
      res.status(200).json({ photo: image });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(error?.response.data.error.message || "Something went wrong");
    }
  }
};

export default handler;
