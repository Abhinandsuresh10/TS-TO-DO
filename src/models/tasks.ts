type ListStatus = 'pending' | 'done';

abstract class List {
    public id: number;
    public title: string;
    public status: ListStatus;

    constructor(id: number, title: string, status: ListStatus) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

export class Task extends List{};


export class TaskManager {
  private tasks: List[] = [];
  private nextId: number = 1;

  getAllTasks(): List[] {
    return this.tasks;
  }

  addTask(title: string): List{
    let task = new Task(this.nextId++, title, 'pending')
    this.tasks.push(task);
    return task;
  }

  editTask(id: number, title: string): void {
    let task = this.getTaskById(id);
    if(task) {
        task.title = title;
    }
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if(index !== -1) {
        this.tasks.splice(index,1);
    }
  }

  getTaskById(id: number) {
    return this.tasks.find((item: List) => item.id === id);
  }

  completeTask(id: number) {
   let task = this.getTaskById(id);
   if(task) {
    if(task.status === 'done') {
        task.status = 'pending';
    } else {
        task.status = 'done';
    }
   }
  }

}