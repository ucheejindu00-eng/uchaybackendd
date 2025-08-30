"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./src/config/db"));
const authRoutes_1 = __importDefault(require("./src/routes/authRoutes"));
const videoRoutes_1 = __importDefault(require("./src/routes/videoRoutes"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/admin", authRoutes_1.default);
app.use("/api/videos", videoRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map