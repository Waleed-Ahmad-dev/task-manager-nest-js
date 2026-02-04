import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTask(){
        return this.tasksService.getAllTasks
    }

    @Get(":id")
    getOneTask(@Param('id') id: string) {
        console.log(id)
        return "One task"
    }

    @Post()
    createTask(@Body() input: string){
        console.log(input)
        return "New task"
    }

    @Put(":id")
    updateTask(@Param('id') id: string, @Body() input: string){
        console.log(input, id)
        return "Update task"
    }

    @Delete(":id")
    deleteTask(@Param('id') id: string){
        console.log(id)
        return "Delete task"
    }
}
