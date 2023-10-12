const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const doneList = document.getElementById("done-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", moveTask);
        taskItem.appendChild(checkBox)

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function moveTask(event) {
    const taskItem = event.target.parentElement;
    const isChecked = event.target.checked;

    if (isChecked) {
        doneList.appendChild(taskItem);
    }
    else {
        taskList.appendChild(taskItem);
    }
}
