// Greeting logic
let user = localStorage.getItem('dashboardUser');
if (!user) {
  user = prompt("What's your name?");
  localStorage.setItem('dashboardUser', user);
}
document.getElementById('greeting').textContent = `Hello, ${user}!`;

// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Live time
function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// To-Do List Logic
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = '';
    saveTasks();
  }
});

renderTasks();
