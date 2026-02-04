import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getAllTask(){
        return "All tasks"
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

    @Put()
    updateTask(@Param('id') id: string, @Body() input: string){
        console.log(input, id)
        return "Update task"
    }

    @Delete()
    deleteTask(@Param('id') id: string){
        console.log(id)
        return "Delete task"
    }
}
