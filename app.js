var taskInput = document.getElementById("task-input");
var listParent = document.getElementById("List");
var tasks = [];

loadTasksFromLocalStorage();

function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var task = {
            text: taskText
        };
        tasks.push(task);
        saveTasksToLocalStorage();
        displayTasks();
        taskInput.value = "";
    }
}

function displayTasks() {
    listParent.innerHTML = "";
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        var spanTag = document.createElement("span");
        spanTag.innerHTML = tasks[i].text;

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.setAttribute("onclick", "editButton(this)");

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "Delete";
        deleteBtn.setAttribute("onclick", "deleteButton(this)");

        li.appendChild(spanTag);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        listParent.appendChild(li);
    }
}

function delAll() {
    tasks = [];
    saveTasksToLocalStorage();
    listParent.innerHTML = "";
}

function editButton(e) {
    var editPrompt = prompt("Enter the New Task");
    if (editPrompt !== null) {
        var index = tasks.findIndex(task => task.text === e.parentNode.firstChild.innerHTML);
        if (index !== -1) {
            tasks[index].text = editPrompt;
            saveTasksToLocalStorage();
            displayTasks();
        }
    }
}

function deleteButton(e) {
    var taskText = e.parentNode.firstChild.innerHTML;
    var index = tasks.findIndex(task => task.text === taskText);
    if (index !== -1) {
        tasks.splice(index, 1);
        saveTasksToLocalStorage();
        e.parentNode.remove();
    }
}

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    var storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}