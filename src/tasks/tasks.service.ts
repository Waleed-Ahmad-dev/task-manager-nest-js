import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    tasks = []

    getAllTasks(){
        return this.tasks
    }

    getOneTask(id: string){
        return this.tasks.filter(tasks => tasks == id)
    }
}
