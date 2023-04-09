import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },

    username: {
      type: String,
      unique: true,
      required: true,
    },

    fullname: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: Object,
      default: "",
    },
    aboutYourSelf: {
      type: String,
      default: "",
    },

    coverPic: {
      type: Object,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
