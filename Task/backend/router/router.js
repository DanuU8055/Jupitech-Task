import express from "express";
import * as userController from "../controller/controller.js";
import upload from "../middleware/multer/multer.js";

const router = express.Router();

router.post("/register",upload.single("fileData"), userController.register);
router.get("/fetch", userController.fetch);
router.delete("/remove", userController.remove);
router.patch("/update", userController.update);

export default router;
