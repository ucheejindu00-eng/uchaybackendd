import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { /* name, */ email, password } = req.body;

    // const totalAdmins = await Admin.countDocuments();
    // if (totalAdmins > 0) {
    //   return res
    //     .status(400)
    //     .json({ msg: "An admin already exists. Only one admin is allowed." });
    // }

    const existing = await Admin.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ msg: "Admin with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ name, email, password: hashedPassword });
    await newAdmin.save();

    res.json({ msg: "Admin registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const getAdmin = async (req: Request, res: Response) => {
  try {
    const oneadmin = await Admin.find();
    res.json(oneadmin);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch videos" });
  }
};
