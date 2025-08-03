document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item (line element)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button with specified class
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn"; // Using className as specified
        
        // Add click handler to remove task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear input field (fixed typo to taskInput)
        taskInput.value = "";
    }

    // Add click event listener to button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener for Enter key (fixed eventKey to event.key)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});








document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false); // 'false' prevents duplicate saving
        });
    }

    // Modified addTask function with Local Storage support
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        createTaskElement(taskText, true); // 'true' saves to Local Storage
        taskInput.value = "";
    }

    // Helper function to create task elements
    function createTaskElement(taskText, saveToStorage) {
        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Add click handler to remove task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            updateLocalStorage();
        };
        
        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if requested
        if (saveToStorage) {
            updateLocalStorage();
        }
    }

    // Function to update Local Storage
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(taskItem => {
            // Get only the task text (excluding the remove button text)
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
