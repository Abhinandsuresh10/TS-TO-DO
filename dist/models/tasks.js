"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = exports.Task = void 0;
class List {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}
class Task extends List {
}
exports.Task = Task;
;
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    getAllTasks() {
        return this.tasks;
    }
    addTask(title) {
        let task = new Task(this.nextId++, title, 'pending');
        this.tasks.push(task);
        return task;
    }
    editTask(id, title) {
        let task = this.getTaskById(id);
        if (task) {
            task.title = title;
        }
    }
    deleteTask(id) {
        const index = this.tasks.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
    getTaskById(id) {
        return this.tasks.find((item) => item.id === id);
    }
    completeTask(id) {
        let task = this.getTaskById(id);
        if (task) {
            if (task.status === 'done') {
                task.status = 'pending';
            }
            else {
                task.status = 'done';
            }
        }
    }
}
exports.TaskManager = TaskManager;
