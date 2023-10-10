const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
