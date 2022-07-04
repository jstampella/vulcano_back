import express from "express";
const router = express.Router();
import * as UserCtrl from "../controllers/user.controller.js";

router.get("/", UserCtrl.getUser);

export default router;
