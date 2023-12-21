const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const inputBoxCate = document.getElementById("input-box-cate");
const categoryContainer = document.getElementById("category-container");

//Function to add new category
function addCategory() {
    if (inputBoxCate.value === '') {
        alert("You must write something before adding!");
    } else {
        //Create new task
        let li = document.createElement("li");
        li.innerHTML = inputBoxCate.value;
        categoryContainer.appendChild(li);

        //Add "3 dots" button for each task created
        let span = document.createElement("span");
        span.innerHTML = "\u2026";
        li.appendChild(span);
    }
    //Reset text in input box
    inputBox.value = "";
    saveData();
}

//Function to appear addTask function when there is
//at least 1 category
function findCategory(){
    if (categoryContainer.childNodes.length > 0) {
        
    } 
}

//Function to add new task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something before adding!");
    } else {
        //Create new task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //Add "3 dots" button for each task created
        let span = document.createElement("span");
        span.innerHTML = "\u2026";
        li.appendChild(span);
    }
    //Reset text in input box
    inputBox.value = "";
    saveData();
}



//Function when click on a task
// if user clicks on li => toggle checked and unchecked
// if user clicks on span ("three dots" button inside li) => the parent (task) will be removed
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

//To do: Add button: 3 points - Enable:
// 1. Edit tasks' name and their categories
// 2. Edit urgent's level: High/Medium/Low (red/yellow/green) 
// 3. Edit deadline: Open the calendar table for them to pick (If time to finish tasks is more than 1 week, automatically 
// change urgent's level to green, from 1 week to 3 days -> yellow, 3 days to 1 hour -> red)
// 