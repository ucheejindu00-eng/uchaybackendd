import mongoose, { Schema, Document } from "mongoose";

export interface IVideo extends Document {
  title: string;
  url: string;
  uploadedBy: string;
  createdAt: Date;
}

const VideoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    uploadedBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<IVideo>("Video", VideoSchema);
