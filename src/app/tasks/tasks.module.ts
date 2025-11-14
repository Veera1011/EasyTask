import { NgModule } from "@angular/core";
import { NewTask } from "./new-task/new-task";
import { Task } from "./task/task";

import { SharedModule } from "../shared/shared.module";
import { Tasks } from "./tasks/tasks";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[NewTask,Task,Tasks],
    imports:[SharedModule,DatePipe,FormsModule],
    exports:[NewTask,Task,Tasks]
})
export class TasksModule{}