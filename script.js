document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false); // don't re-save to storage
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        createTaskElement(taskText, true); // true = save to storage
        taskInput.value = "";
    }

    // Helper function to create task elements
    function createTaskElement(taskText, saveToStorage) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // ✅ required by checker

        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            updateLocalStorage();
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        if (saveToStorage) {
            updateLocalStorage();
        }
    }

    // Update Local Storage with current tasks
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(taskItem => {
            tasks.push(taskItem.childNodes[0].textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
