const express = require('express');
const router = express.Router();
const {allRequest} = require('../controllers/task.controller');
const classRequest = new allRequest();

// Tasks routes
router.get('/allTasks', classRequest.getAllTasks);
router.post('/createTask', classRequest.createNewTask);
router.patch('/updateTask', classRequest.changeTaskInfo);
router.delete('/deleteTask', classRequest.deleteTask);
router.delete('/deleteAllTask', classRequest.deleteAllTask);

//User routes

module.exports = router;