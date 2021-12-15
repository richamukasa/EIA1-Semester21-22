window.addEventListener("load", function () {
    const input: HTMLInputElement = (document.getElementById("taskInput") as HTMLInputElement);
    const wrapper: HTMLDivElement = (document.getElementById("wrapper") as HTMLDivElement);
    let taskCount: number = 0;
    let openTaskCount: number = 0;

    function addTask(): void {
        let newTask: HTMLDivElement = document.createElement("div");
        let checkButton: HTMLElement = document.createElement("i");
        let deleteButton: HTMLElement = document.createElement("i");

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

        deleteButton.addEventListener("click", function(): void {
            wrapper.removeChild(newTask);
            if (taskCount == openTaskCount) {
                taskCount--;
                openTaskCount--;
            } else {
                taskCount--;
            }
            document.getElementById("tasks").innerHTML = "Tasks: " + taskCount;
            document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount}`;
        });

        checkButton.addEventListener("click", function(): void {
            if (checkButton.className == "far fa-circle") {
                checkButton.className = "fas fa-check-circle";
                checkButton.style.color = "#00ff50";
                newTask.style.opacity = "0.8";
                newTask.style.textDecorationLine = "line-through";
                openTaskCount--;
                document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount}`;
            } else {
                checkButton.className = "far fa-circle";
                checkButton.style.color = "#ddd";
                newTask.style.opacity = "1";
                newTask.style.textDecorationLine = "none";
                openTaskCount++;
                document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount}`;
            }
        });
    }

    document.addEventListener("keydown", function(event: KeyboardEvent): void {
        if (event.key == "Enter") {
            addTask();
        }
    });
});