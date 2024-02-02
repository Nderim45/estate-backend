import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  updateListing,
  getListings,
} from "../controllers/listing-controler.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);

router.delete("/delete/:id", verifyToken, deleteListing);

router.post("/update/:id", verifyToken, updateListing);

router.get("/:id", getListing);

router.get("/", getListings)

export default router;
