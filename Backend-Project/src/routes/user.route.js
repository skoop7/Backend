import { Router } from "express";
import {
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { loginUser, logoutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
); // with the help of upload we have injected middleware just before the controller

router.route("/login").post(loginUser);

//secured routes

router.route("/logout").post(verifyJWT, logoutUser); // we have injected verifyJWT named middleware just before logout to take out user info from token
router.route("refresh-token").post(refreshAccessToken);
export default router;
