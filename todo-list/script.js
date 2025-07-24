const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const doneCount = document.getElementById('doneCount');
const pendingCount = document.getElementById('pendingCount');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateSummary() {
  const done = tasks.filter(t => t.done).length;
  const pending = tasks.length - done;
  doneCount.textContent = done;
  pendingCount.textContent = pending;
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.done ? 'completed' : '';

    li.innerHTML = `
      ${task.text}
      <div class="actions">
        <button onclick="toggleTask(${index})">${task.done ? 'Undo' : 'Done'}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
  updateSummary();
}

function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    taskInput.value = '';
    saveTasks();
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

renderTasks();
