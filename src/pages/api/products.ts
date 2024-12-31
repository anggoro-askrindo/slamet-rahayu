import type { NextApiRequest, NextApiResponse } from "next";

interface IProduct {
  name: string;
  id: string;
}

type Data = {
  message: string;
  data: IProduct[];
};

const tokenAdmin = "1234567890";
const tokenMarketing = "12345678";

const productData = [
  {
    id: "9001",
    name: "Asuransi Mikro Rumahku"
  },
  {
    id: "9002",
    name: "Asuransi Mikro Bahari"
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const header = req.headers;
  const token = header.authorization?.replace("Bearer ", "");
  if (req.method === "GET") {
    if (token === tokenMarketing || token === tokenAdmin) {
      res.status(200).json({ message: "success", data: productData });
    } else {
      res.status(403).json({message: "Forbidden", data: []})
    }
  }
}