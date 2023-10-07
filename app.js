var taskInput = document.getElementById("task-input");
var listParent = document.getElementById("List");

function addTask() {
    var li = document.createElement("li");
    var spanTag = document.createElement("span");
    spanTag.innerHTML = taskInput.value

    //  creating Edit button
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick","editButton(this)");  
    
    // creating Delete button 
    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "Delete";
    deleteBtn.setAttribute("onclick","deleteButton(this)"); 
    
    if (taskInput.value !== "" && taskInput.value !== " ") {
        listParent.appendChild(li);
        li.appendChild(spanTag);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn)
    }

    taskInput.value = ""
}

function delAll() {
    listParent.innerHTML = " "
}
function editButton(e) {

    // console.log()
    var editPrompt = prompt("Enter the New Task");
    e.parentNode.firstChild.innerHTML = editPrompt
    
}
function deleteButton(e){
    e.parentNode.remove();
}