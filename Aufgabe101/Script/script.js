window.addEventListener("load", function () {
    const artyom = new Artyom();
    const input = document.getElementById("taskInput");
    const wrapper = document.getElementById("wrapper");
    let taskCount = 0;
    let openTaskCount = 0;
    let doneTaskCount = 0;
    /**
     * Erstellt einen neuen Listenpunkt durch Kreation eines neuen DIV Elements, welches dem Wrapper hinzugefügt wird
     * @param task Die Aufgabe, die hinzugefügt wird. Bei Enterdruck ist das das Inputfeld, bei Spracherkennung die Wildcard
     */
    function addTask(task) {
        let newTask = document.createElement("div");
        let checkButton = document.createElement("i");
        let deleteButton = document.createElement("i");
        checkButton.id = "checkButton";
        checkButton.className = "far fa-circle";
        newTask.className = "checkBox";
        deleteButton.id = "delete";
        deleteButton.className = "fas fa-minus-circle";
        newTask.append(checkButton);
        newTask.append(task);
        newTask.append(deleteButton);
        input.value = "";
        wrapper.append(newTask);
        taskCount++;
        openTaskCount++;
        document.getElementById("tasks").innerHTML = `Tasks: ${taskCount}`;
        document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount} | Done Tasks: ${doneTaskCount}`;
        //Löscht die Task und passt die Zähler an
        deleteButton.addEventListener("click", function () {
            wrapper.removeChild(newTask);
            if (taskCount == openTaskCount) {
                taskCount--;
                openTaskCount--;
            }
            else {
                taskCount--;
                doneTaskCount--;
            }
            document.getElementById("tasks").innerHTML = "Tasks: " + taskCount;
            document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount} | Done Tasks: ${doneTaskCount}`;
        });
        checkButton.addEventListener("click", function () {
            if (checkButton.className == "far fa-circle") {
                checkButton.className = "fas fa-check-circle";
                checkButton.style.color = "#00ff50";
                newTask.style.opacity = "0.8";
                newTask.style.textDecorationLine = "line-through";
                openTaskCount--;
                doneTaskCount++;
                document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount} | Done Tasks: ${doneTaskCount}`;
            }
            else {
                checkButton.className = "far fa-circle";
                checkButton.style.color = "#ddd";
                newTask.style.opacity = "1";
                newTask.style.textDecorationLine = "none";
                openTaskCount++;
                doneTaskCount--;
                document.getElementById("openTasks").innerHTML = `Open Tasks: ${openTaskCount} | Done Tasks: ${doneTaskCount}`;
            }
        });
    }
    /**
     * Erstellt Aufgabe nach dem Kommando "Charlie, mitschreiben"
     * Führt einfach addTask aus und fügt die Wilcard als Parameter ein
     */
    artyom.addCommands({
        smart: true,
        indexes: ["Charlie mit schreiben*", "Charlie mitschreiben*"],
        action: function (i, wildcard) {
            addTask(wildcard);
            console.log("Currently saying " + wildcard);
        }
    });
    function startVoiceInput() {
        document.getElementById("recordButton").style.color = "#f04;";
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuos: true,
                listen: true,
                debug: true,
                speed: 1
            });
        });
    }
    //Artyom wird jedes Mal bei Click auf das Mikrofon gestartet
    document.getElementById("recordButton").addEventListener("click", startVoiceInput);
    document.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            addTask(input.value);
        }
    });
});
//# sourceMappingURL=script.js.map