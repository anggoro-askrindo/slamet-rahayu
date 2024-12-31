import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  token?: string;
  username?: string;
  role?: string;
};

const tokenAdmin = "1234567890";
const tokenMarketing = "12345678";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const body = req.body;
  if (req.method === "POST") {
    if (body.username === "user-marketing" && body.password === "12345") {
      res.status(200).json({ message: "success", token: tokenMarketing, role: "marketing", username: body.username });
    } else if (body.username === "user-admin" && body.password === "123456") {
      res.status(200).json({ message: "success", token: tokenAdmin, role: "admin", username: body.username });
    } else {
      res.status(401).json({ message: "Authentication Failed" });
    }
  }
}