import {Router} from 'express';

import { 
    renderTasks, 
    createTask, 
    renderEditTask, 
    deleteTask, editTask, 
    taskToggleDone
} from '../controllers/tasks.controller';


const router = Router();

router.get('/', renderTasks);

router.post('/tasks/add', createTask);

router.get('/tasks/:id/edit', renderEditTask);

router.post('/tasks/:id/edit', editTask);

router.get('/tasks/:id/delete', deleteTask);

router.get('/tasks/:id/toggleDone', taskToggleDone);

export default router;