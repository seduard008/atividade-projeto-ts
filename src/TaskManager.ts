import { Task } from './Task.js';





class TaskManager {


    private tasks: Task[] = [];


    private nextTaskId: number = 1;





    // Adiciona uma nova tarefa à lista


    addTask(title: string): Task {


        const newTask: Task = {


            id: this.nextTaskId++,


            title: title,


            completed: false,


        };


        this.tasks.push(newTask);


        return newTask;


    }





    // Retorna a lista de todas as tarefas


    getTasks(): Task[] {


        return this.tasks;


    }





    // Alterna o estado de conclusão de uma tarefa


    toggleTaskCompletion(taskId: number): void {


        const task = this.tasks.find(t => t.id === taskId);


        if (task) {


            task.completed = !task.completed;


        }


    }





    // Deletar uma tarefa


    deleteTask(taskId: number): void {


        const taskIndex = this.tasks.findIndex(t => t.id === taskId);


        if (taskIndex > -1){


            this.tasks.splice(taskIndex, 1)


        }


    }


}





// Exporta uma instância única (Singleton) do TaskManager


export const taskManager = new TaskManager();