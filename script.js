document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task (renamed to 'address' as per instructions)
    function address() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new line element (changed from li to match instructions)
        const lineElement = document.createElement('div'); // Changed from li
        lineElement.textContent = taskText;
        
        // Create remove button (class changed to 'remove-bin')
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-bin"; // Changed from remove-btn
        
        // Add click event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(lineElement);
        };
        
        // Append elements
        lineElement.appendChild(removeButton);
        taskList.appendChild(lineElement);
        
        // Clear input field
        taskInput.value = "";
    }

    // Add task when button is clicked
    addButton.addEventListener('click', address);

    // Add task when Enter key is pressed (fixed eventKey to event.key)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            address();
        }
    });
});
