import type { NextApiRequest, NextApiResponse } from 'next';
import Anime from "../../../database/Anime.json";
type Data = {
  status:String,
  totalResults:Number,
  data: any;
};

type ErrorResponse = {
  error: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>) {
  try{
    if (req.method === "GET") {
      res.status(200).json({ status:"ok",totalResults:Anime.length,data:Anime });
    } else {
      res.status(400).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
