// Create the new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add a click event listener to the remove button
        // When clicked, it removes the parent li element
        removeButton.onclick = () => {
            li.remove();
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the new list item to the task list (ul)
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    };

    // Attach event listeners to the add button and input field
    // Add a task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add a task when the "Enter" key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
