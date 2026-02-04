import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getAllTask(){
        return "All tasks"
    }
}
