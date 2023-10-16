document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to update the task list
    function updateTaskList() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task}</span>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            taskList.appendChild(li);
        });
        // Add event listeners to delete buttons
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                tasks.splice(index, 1);
                updateTaskList();
                saveTasksToLocalStorage();
            });
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push(taskText);
            taskInput.value = "";
            updateTaskList();
            saveTasksToLocalStorage();
        }
    }

    // Function to save tasks to local storage
    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Event listeners
    addTaskBtn.addEventListener("click", addTask);

    // Initial load of tasks
    updateTaskList();
});
