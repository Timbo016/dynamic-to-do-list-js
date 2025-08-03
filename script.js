// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements as specified
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function to handle task creation
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();
        
        // Validate input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item element
        const listItem = document.createElement('li');
        
        // Create task text node (using textContent as specified)
        listItem.textContent = taskText;
        
        // Create remove button with specified class
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Add click handler to remove task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append elements as specified
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear input field
        taskInput.value = "";
    }

    // Add click event listener to button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
