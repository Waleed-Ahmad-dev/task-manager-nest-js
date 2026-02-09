import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTask(){
        return this.tasksService.getAllTasks()
    }

    @Get(":id")
    getOneTask(@Param('id') id: string) {
        return this.tasksService.getOneTask(id);
    }

    @Post()
    createTask(@Body('title') title: string, @Body('description') description: string){
        return this.tasksService.createTask(title, description);
    }

    @Put(":id")
    updateTask(@Param('id') id: string, @Body('title') title: string, @Body('description') description: string){
        return this.tasksService.updateTask(id, title, description)
    }

    @Delete(":id")
    deleteTask(@Param('id') id: string){
        return this.tasksService.deleteTask(id)
    }
}
