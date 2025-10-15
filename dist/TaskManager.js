class TaskManager {



    constructor() {


        this.tasks = [];


        this.nextTaskId = 1;


    }


    // Adiciona uma nova tarefa à lista


    addTask(title) {


        const newTask = {


            id: this.nextTaskId++,


            title: title,


            completed: false,


        };


        this.tasks.push(newTask);


        return newTask;


    }


    // Retorna a lista de todas as tarefas


    getTasks() {


        return this.tasks;


    }


    // Alterna o estado de conclusão de uma tarefa


    toggleTaskCompletion(taskId) {


        const task = this.tasks.find(t => t.id === taskId);


        if (task) {


            task.completed = !task.completed;


        }


    }


    // Deletar uma tarefa


    deleteTask(taskId) {


        const taskIndex = this.tasks.findIndex(t => t.id === taskId);


        if (taskIndex > -1) {


            this.tasks.splice(taskIndex, 1);


        }


    }


}


// Exporta uma instância única (Singleton) do TaskManager


export const taskManager = new TaskManager();
