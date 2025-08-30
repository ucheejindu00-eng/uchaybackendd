"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmin = exports.loginAdmin = exports.registerAdmin = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Admin_1 = __importDefault(require("../models/Admin"));
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const totalAdmins = await Admin_1.default.countDocuments();
        if (totalAdmins > 0) {
            return res
                .status(400)
                .json({ msg: "An admin already exists. Only one admin is allowed." });
        }
        const existing = await Admin_1.default.findOne({ email });
        if (existing) {
            return res
                .status(400)
                .json({ msg: "Admin with this email already exists." });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const newAdmin = new Admin_1.default({ name, email, password: hashedPassword });
        await newAdmin.save();
        res.json({ msg: "Admin registered successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
};
exports.registerAdmin = registerAdmin;
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin_1.default.findOne({ email });
        if (!admin)
            return res.status(400).json({ msg: "Invalid credentials" });
        const isMatch = await bcryptjs_1.default.compare(password, admin.password);
        if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials" });
        const token = jsonwebtoken_1.default.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token });
    }
    catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};
exports.loginAdmin = loginAdmin;
const getAdmin = async (req, res) => {
    try {
        const oneadmin = await Admin_1.default.find();
        res.json(oneadmin);
    }
    catch (err) {
        res.status(500).json({ msg: "Failed to fetch videos" });
    }
};
exports.getAdmin = getAdmin;
//# sourceMappingURL=authController.js.map