// schema.ts
import mongoose from "mongoose";

const webCRUDSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  github: {
    type: String,
    required: true,
  },
});

let WebCRUDs: any;

try {
  WebCRUDs = mongoose.model("WebCRUD");
} catch (error) {
  WebCRUDs = mongoose.model("WebCRUD", webCRUDSchema);
}

export default WebCRUDs;
