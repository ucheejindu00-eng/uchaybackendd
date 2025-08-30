"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = exports.uploadVideo = void 0;
const Video_1 = __importDefault(require("../models/Video"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const uploadVideo = async (req, res) => {
    try {
        const { adminID } = req.params;
        const file = req.file;
        if (!file)
            return res.status(400).json({ msg: "No file uploaded" });
        // Upload to Cloudinary
        const result = await cloudinary_1.default.uploader.upload(file.path, {
            resource_type: "video",
        });
        // Delete file from local storage after upload (cleanup)
        fs_1.default.unlinkSync(file.path);
        const newVideo = new Video_1.default({
            title: req.body.title,
            url: result.secure_url,
            uploadedBy: adminID,
        });
        await newVideo.save();
        res.json(newVideo);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Upload failed" });
    }
};
exports.uploadVideo = uploadVideo;
const getVideos = async (req, res) => {
    try {
        const videos = await Video_1.default.find().sort({ createdAt: -1 });
        res.json(videos);
    }
    catch (err) {
        res.status(500).json({ msg: "Failed to fetch videos" });
    }
};
exports.getVideos = getVideos;
//# sourceMappingURL=videoController.js.map