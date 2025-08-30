"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_js_1 = __importDefault(require("./config/db.js"));
const authRoutes_js_1 = __importDefault(require("./routes/authRoutes.js"));
const videoRoutes_js_1 = __importDefault(require("./routes/videoRoutes.js"));
const PORT = process.env.PORT || 5000;
dotenv_1.default.config();
(0, db_js_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/admin", authRoutes_js_1.default);
app.use("/api/videos", videoRoutes_js_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map