import { Request, Response } from "express";
import Video from "../models/Video";
import cloudinary from "../utils/cloudinary";
import fs from "fs";

export const uploadVideo = async (req: Request, res: Response) => {
  try {
     const { adminID } = req.params;
    const file = req.file as Express.Multer.File;
    if (!file) return res.status(400).json({ msg: "No file uploaded" });
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "video",
    });

    // Delete file from local storage after upload (cleanup)
    fs.unlinkSync(file.path);

    
    const newVideo = new Video({
      title: req.body.title,
      url: result.secure_url,
      uploadedBy: adminID,
    });

    await newVideo.save();
    res.json(newVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Upload failed" });
  }
};

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch videos" });
  }
};
