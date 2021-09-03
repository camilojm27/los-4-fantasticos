import { Router } from "express";
import { signup, signin } from "../controllers/auth.ctrler";

const router: Router = Router();

router.post("/signup", signup);

router.post("/signin", signin);

export default router;
