// Import necessary modules and types
import type { NextApiRequest, NextApiResponse } from "next";
const connectDataBase = require("../config/database");
import WebCRUDs from "../config/schema";
// import mongoose from 'mongoose';

// Connect to the database
// connectDataBase();

// Define types
type Data = {
  data: any; // Adjust the type based on your data model
};

type ErrorResponse = {
  error: string;
};

// API route handler
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>,
) => {
  const {
    method,
    query: { id },
  } = req;
  console.log({ method, id });

  try {
    // Connect to the database
    await connectDataBase();

    switch (method) {
      case "GET":
        // Fetch all documents from the collection
        const fetchData = await WebCRUDs.find({});
        res.status(200).json({ data: fetchData });
        break;

      case "DELETE":
        // Delete a document by ID
        // console.log(mongoose.Types.ObjectId.isValid(id));
        // const objectId = new mongoose.Types.ObjectId(id);
        const deleteData = await WebCRUDs.findByIdAndDelete(id);
        if (deleteData) {
          res.status(200).json({ data: deleteData });
        } else {
          res.status(404).json({ error: "Not Found" });
        }
        break;

      case "PUT":
        // Update a document by ID
        req.body =
          typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        const { name, github } = req.body;
        const updateData = await WebCRUDs.findByIdAndUpdate(
          id,
          { name, github },
          { new: true }, // Return the updated document
        );
        if (updateData) {
          res.status(200).json({ data: updateData });
        } else {
          res.status(404).json({ error: "Not Found" });
        }
        break;

      case "POST":
        // Create a new document
        // const { newId,newName, newGithub } = req.body;
        req.body =
          typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        // console.log(req.body.id);
        if (!req.body.id || !req.body.name || !req.body.github) {
          return res
            .status(400)
            .json({ error: "ID,Name,GitHub fields are required" });
        }
        const newData = new WebCRUDs({
          id: req.body.id,
          name: req.body.name,
          github: req.body.github,
        });
        const savedData = await newData.save();
        res.status(201).json({ data: savedData });
        break;

      default:
        res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
