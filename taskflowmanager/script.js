let tasks = [];
let taskId = 0;

function addTask() {
    let name = document.getElementById("taskName").value;

    if (name.trim() === "") {
        alert("Task name cannot be empty!");
        return;
    }

    let priority = document.getElementById("priority").value;
    let isImportant = document.getElementById("important").checked;
    let isCompleted = document.getElementById("completed").checked;

    let date = new Date().toLocaleString();

    let task = {
        id: taskId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: isCompleted,
        date: date
    };

    tasks.push(task);

    displayTasks();

    console.log(JSON.stringify(tasks));

    document.getElementById("taskName").value = "";
}

function displayTasks() {
    let output = "";

    for (let i = 0; i < tasks.length; i++) {
        let t = tasks[i];

        let style = "";

        // important = red text
        if (t.isImportant) {
            style += "color:red;";
        }

        // completed = line through
        if (t.isCompleted) {
            style += "text-decoration: line-through;";
        }

        let priorityClass = t.priority.toLowerCase();

        output += `
        <div class="task ${priorityClass}">
            <p style="${style}">
                <strong>${t.name}</strong>
            </p>
            <p>Priority: ${t.priority}</p>
            <p>Date: ${t.date}</p>

            <button onclick="toggleComplete(${t.id})">Toggle Complete</button>
            <button onclick="deleteTask(${t.id})">Delete</button>
        </div>
        `;
    }

    document.getElementById("taskmanager").innerHTML = output;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    displayTasks();
    console.log(JSON.stringify(tasks));
}

function toggleComplete(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].isCompleted = !tasks[i].isCompleted;
        }
    }

    displayTasks();
    console.log(JSON.stringify(tasks));
}