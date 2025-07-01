const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const clock = document.getElementById('clock');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');

// Add Task
addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    const li = document.createElement('li');
    li.textContent = text;

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '✔️';
    completeBtn.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Live Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Theme Toggle
lightMode.addEventListener('click', () => {
  document.body.classList.add('light');
});
darkMode.addEventListener('click', () => {
  document.body.classList.remove('light');
});
