import express from "express";
import { registerAdmin, loginAdmin, getAdmin } from "../controllers/authController";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/getadmin", getAdmin);

export default router;
