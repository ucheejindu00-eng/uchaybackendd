"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI as string);
        const conn = await mongoose_1.default.connect("mongodb://127.0.0.1:27017/MovieAssignmentDB");
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`MongoDB Connected: ${conn.connection.name}`);
    }
    catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map