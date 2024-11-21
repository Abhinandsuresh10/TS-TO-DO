"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("../models/tasks");
let manager = new tasks_1.TaskManager();
const loadPage = async (req, res) => {
    try {
        let tasks = manager.getAllTasks();
        res.render('index', { tasks });
    }
    catch (error) {
        console.log(error);
    }
};
const addTask = async (req, res) => {
    try {
        let title = req.body.title;
        manager.addTask(title);
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
    }
};
const deleteTask = async (req, res) => {
    try {
        let id = Number(req.body.id);
        manager.deleteTask(id);
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
    }
};
const completeTask = async (req, res) => {
    try {
        let id = Number(req.body.id);
        manager.completeTask(id);
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
    }
};
const editTask = async (req, res) => {
    try {
        let id = Number(req.body.id);
        let title = req.body.title;
        manager.editTask(id, title);
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = {
    loadPage,
    addTask,
    deleteTask,
    completeTask,
    editTask
};
