document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create the li element and set text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Set the onclick event
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for 'Enter' key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
