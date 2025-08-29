import express from "express";
import multer from "multer";
import { uploadVideo, getVideos } from "../controllers/videoController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload/:adminID", upload.single("video"), uploadVideo);
router.get("/", getVideos);

export default router;
