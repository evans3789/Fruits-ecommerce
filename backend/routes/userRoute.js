import express from "express";
import fs from "fs";
import { userLogin, userRegister } from "../controllers/userController.js";
import multer from "multer";
const userRouter = express.Router();

// storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

userRouter.post("/register", upload.single("image"), userRegister);
userRouter.post("/login", userLogin);

export default userRouter;
