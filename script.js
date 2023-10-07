const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Function to add new task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something before adding!");
    } else {
        //Create new task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //Add "X" button for each task created
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //Reset text in input box
    inputBox.value = "";
    saveData();
}

//Function when click on a task
// if user clicks on li => toggle checked and unchecked
// if user clicks on span ("X" button inside li) => the parent (task) will be removed
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save to-do list on the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();