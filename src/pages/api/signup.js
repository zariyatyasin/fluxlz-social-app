// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Auth } from "@/ApiHelper/controller/Auth";
import connectDB from "@/ApiHelper/utlits";

export default function handler(req, res) {
  connectDB();
  if (req.method === "POST") {
    return Auth(req, res);
  }
}
