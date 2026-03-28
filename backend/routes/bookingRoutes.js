import express from "express";
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();

// EXACT match with frontend
router.post("/claim", createBooking);

export default router;