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
