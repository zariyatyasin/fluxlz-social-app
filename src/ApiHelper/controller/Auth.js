import User from "../model/User";
import CryptoJS from "crypto-js";
import cookie from "cookie";
import jwt from "jsonwebtoken";
export const Auth = async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;
    const exitsEmail = await User.find({ email });
    const exitsUsername = await User.find({ username });

    // if (exitsEmail) {
    //   return res.status(400).json("Eamil Already Used");
    // }
    // if (exitsUsername) {
    //   return res.status(400).json("Username Already Used");
    // }
    let hash = CryptoJS.AES.encrypt(req.body.password, "yasinnow").toString();
    const newUser = await User.create({
      email: req.body.email,
      fullname: req.body.fullname,
      username: req.body.username,
      password: hash,
    });

    if (newUser) {
      const accessToken = jwt.sign(
        {
          id: newUser._id,
          isAdmin: newUser.isAdmin,
        },
        "iloveyou",
        { expiresIn: "3d" }
      );
      console.log(accessToken);
      res.setHeader(
        "set-Cookie",
        cookie.serialize("token", accessToken, {
          sameSite: "strict",
          path: "/",
          httpOnly: true,
        })
      );
      res.status(201).json({
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        fullname: newUser.fullname,
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
