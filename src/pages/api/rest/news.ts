import type { NextApiRequest, NextApiResponse } from "next";
import News from "../../../database/News.json";
import ModifiedNews from "../../../database/ModifiedNews.json";
type Data = {
  status: string;
  totalResults: Number;
  data: any;
};

type ErrorResponse = {
  error: string;
};
type Article = {
  type: string;
  articles: any;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>,
) {
  try {
    if (req.method === "GET") {
      if (req.query.type === undefined) {
        // Send response for no query type
        res.status(200).json({
          status: "ok",
          totalResults: News.articles.length,
          data: News,
        });
      } else {
        // Handle query type
        const filterdata: any = ModifiedNews.filter(
          (ele) => ele.type === req.query.type,
        );
        res.status(200).json({
          status: "ok",
          totalResults: filterdata[0].articles.length
            ? filterdata[0].articles.length
            : 0,
          data: filterdata[0].articles,
        });
      }
    } else {
      // Handle unsupported HTTP method
      res.status(400).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
