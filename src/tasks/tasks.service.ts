import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getOneTask(id: string): Task {
        const found = this.tasks.find(task => task.id === id);
        
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
    
    createTask(title: string, description: string): Task {
        const task: Task = {
            id: Math.random().toString(36).substring(2, 15),
            title,
            description,
            status: 'OPEN',
        };
        this.tasks.push(task);
        return task;
    }

    updateTask(id: string, title: string, description: string){
        const updatedTask: Task[] = this.tasks.map(task => {
            if (task.id === id){
                return {...task, title: title, description: description}
            }
            return task
        })
        return updatedTask
    }
}
