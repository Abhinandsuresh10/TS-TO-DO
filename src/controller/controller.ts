import { TaskManager } from '../models/tasks'

import { Request, Response } from "express";

let manager = new TaskManager();

const loadPage = async (req:Request, res:Response) => {
    try {
    let tasks = manager.getAllTasks();
    res.render('index',{tasks}); 
    } catch (error) {
        console.log(error)
    }
}

const addTask = async (req:Request, res:Response) => {
    try {
      let title: string = req.body.title;
      manager.addTask(title) ;

      res.sendStatus(200);

    } catch (error) {
        console.log(error)
    }
}

const deleteTask = async (req:Request, res:Response) => {
    try {
      let id: number = Number(req.body.id);
      manager.deleteTask(id);
      res.sendStatus(200);  
    } catch (error) {
       console.log(error); 
    }
}

const completeTask = async (req:Request, res:Response) => {
    try {
        let id: number = Number(req.body.id);
        manager.completeTask(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
}

const editTask = async(req:Request, res:Response) => {
  try {
    let id: number = Number(req.body.id);
    let title: string = req.body.title;
    manager.editTask(id, title);
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
  }
}


export default {
    loadPage,
    addTask,
    deleteTask,
    completeTask,
    editTask
}