"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const videoController_1 = require("../controllers/videoController");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: "uploads/" });
router.post("/upload/:adminID", upload.single("video"), videoController_1.uploadVideo);
router.get("/", videoController_1.getVideos);
exports.default = router;
//# sourceMappingURL=videoRoutes.js.map