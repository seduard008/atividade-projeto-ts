import { Task } from './Task.js';
import { taskManager } from './TaskManager.js';

// Elementos do DOM
const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
const taskList = document.getElementById('task-list') as HTMLUListElement;

// Função para renderizar as tarefas na lista
function renderTasks(): void {
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

        taskList.appendChild(taskItem);
    });
}

// Função para adicionar uma nova tarefa
function addNewTask(): void {
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