const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

const tasks = [];

function addTask() {
    const taskText = newTaskInput.value;
    if (taskText) {
        tasks.push({ text: taskText }); 
        renderTasks();
        newTaskInput.value = ''; 
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks(); 
}

function renderTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => removeTask(index));

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}
