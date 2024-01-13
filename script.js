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
    inputBoxCate.value = "";
    saveData();
}



// Function when click on a category on sidebar:
// Show "add task" menu
// On "add task menu" show: "To-do List in 'categoryName' Category".

const changeText = document.querySelector("#category-text-change");
changeText.addEventListener("click", fucntion()) {
    changeText.textContent = ""
}

// if user clicks on li => toggle screen with all tasks from that category
// if user clicks on span ("three dots" button inside li) 
//=> open edit menu 
categoryContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to show/hide addTask function based on category availability
function manageTaskInput() {
    const categoryCount = categoryContainer.childElementCount;
    const addTaskButton = document.querySelector(".todo-app"); 
    // Target the whole todo-app within .container
  
    if (categoryCount > 0) {
      addTaskButton.style.display = "block";
    } else if (categoryCount === 1) {
        addTask(); // Call addTask directly when a task is added
    } else {
      addTaskButton.style.display = "none";
    }
  }

//TODO: 

   // Call manageTaskInput initially and when categories change
 manageTaskInput();
 categoryContainer.addEventListener("DOMNodeInserted", manageTaskInput);
 categoryContainer.addEventListener("DOMNodeRemoved", manageTaskInput);

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