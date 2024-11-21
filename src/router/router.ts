import { Router } from "express";
import controller from '../controller/controller'

const router = Router()

router.get('/',controller.loadPage);
router.post('/add-task',controller.addTask);
router.delete('/delete-task',controller.deleteTask);
router.patch('/complete-task',controller.completeTask);
router.put('/edit-task',controller.editTask);

export default router;