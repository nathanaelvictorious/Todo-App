import express from "express";
import {
    getTasks, 
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/TaskController.js";

const router = express.Router();

router.get('/Tasks', getTasks);
router.get('/Tasks/:id', getTaskById);
router.post('/Tasks', createTask);
router.patch('/Tasks/:id', updateTask);
router.delete('/Tasks/:id', deleteTask);

export default router;