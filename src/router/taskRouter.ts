import { Router } from "express";
import { createTaskHandler } from "../controller/taskController.ts";

const router = Router();

router.post("/tasks", createTaskHandler);

export default router;
