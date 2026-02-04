import { Controller, Get, Param } from '@nestjs/common';

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
}
