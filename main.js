const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("task-container");

function addNewTask() {
    const newTask = userInput.value.trim();

    if(newTask !== "") {
        const taskDiv = document.createElement("div");
        taskDiv.textContent = newTask;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            taskContainer.removeChild(taskDiv);

        });
        taskDiv.appendChild(deleteBtn);
        taskContainer.appendChild(taskDiv);
        userInput.value = "";
    }
}

addBtn.addEventListener("click", addNewTask);