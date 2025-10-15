import { taskManager } from './TaskManager.js';



// Elementos do DOM


const taskInput = document.getElementById('task-input');


const addTaskBtn = document.getElementById('add-task-btn');


const taskList = document.getElementById('task-list');


// Função para renderizar as tarefas na lista


function renderTasks() {


    taskList.innerHTML = '';


    const tasks = taskManager.getTasks();


    tasks.forEach(task => {


        const taskItem = document.createElement('li');


        taskItem.className = 'task-item';


        taskItem.textContent = task.title;


        if (task.completed) {


            taskItem.classList.add('completed');


        }


        // Adiciona evento de clique para marcar como concluída


        taskItem.addEventListener('click', () => {


            taskManager.toggleTaskCompletion(task.id);


            renderTasks();


        });


        // Criando um botão para deletar


        const deleteButton = document.createElement('button');


        deleteButton.textContent = 'Excluir';


        deleteButton.className = 'delete-btn';


        // Atribuindo a inteligência a ele


        deleteButton.addEventListener('click', (event) => {


            event.stopPropagation();


            taskManager.deleteTask(task.id);


            renderTasks();


        });


        // Colocando ele no container das tarefas


        taskItem.appendChild(deleteButton);


        taskList.appendChild(taskItem);


    });


}


// Função para adicionar uma nova tarefa


function addNewTask() {


    const taskTitle = taskInput.value.trim();


    if (taskTitle) {


        taskManager.addTask(taskTitle);


        taskInput.value = '';


        renderTasks();


    }


}


// Adiciona os eventos de escuta


addTaskBtn.addEventListener('click', addNewTask);


taskInput.addEventListener('keypress', (event) => {


    if (event.key === 'Enter') {


        addNewTask();


    }


});


// Renderização inicial das tarefas


renderTasks();