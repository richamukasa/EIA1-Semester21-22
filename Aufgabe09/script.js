window.addEventListener("load", function () {
    const input = document.getElementById("taskInput");
    const wrapper = document.getElementById("wrapper");
    let taskCount = 0;
    let openTaskCount = 0;
    function addTask() {
        let newTask = document.createElement("div");
        let checkButton = document.createElement("i");
        let deleteButton = document.createElement("i");
        checkButton.id = "checkButton";
        checkButton.className = "far fa-circle";
        newTask.className = "checkBox";
        deleteButton.id = "delete";
        deleteButton.className = "fas fa-minus-circle";
        newTask.append(checkButton);
        newTask.append(input.value);
        newTask.append(deleteButton);
        input.value = "";
        wrapper.append(newTask);
        taskCount++;
        openTaskCount++;
        document.getElementById("tasks").innerHTML = `Tasks: ${taskCount}`;
        document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount}`;
        deleteButton.addEventListener("click", function () {
            wrapper.removeChild(newTask);
            if (taskCount == openTaskCount) {
                taskCount--;
                openTaskCount--;
            }
            else {
                taskCount--;
            }
            document.getElementById("tasks").innerHTML = "Tasks: " + taskCount;
            document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount}`;
        });
        checkButton.addEventListener("click", function () {
            if (checkButton.className == "far fa-circle") {
                checkButton.className = "fas fa-check-circle";
                checkButton.style.color = "#00ff50";
                newTask.style.opacity = "0.8";
                newTask.style.textDecorationLine = "line-through";
                openTaskCount--;
                document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount}`;
            }
            else {
                checkButton.className = "far fa-circle";
                checkButton.style.color = "#ddd";
                newTask.style.opacity = "1";
                newTask.style.textDecorationLine = "none";
                openTaskCount++;
                document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount}`;
            }
        });
    }
    document.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            addTask();
        }
    });
});
//# sourceMappingURL=script.js.map