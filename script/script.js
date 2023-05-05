const head = document.getElementById("task-list");
const submit = document.getElementById("add-task-icon");

const content = document.getElementById("input-box");

const toDoPreview = document.getElementsByClassName("toDoList")[0];

const toDoArr = [];
let completedArr =[];
let active = [];


// const checkBtn =document.getElementById("check-completed");

submit.addEventListener("click", () => {
    addTask();
});


content.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask(){
    const inputVal = content.value.trim();
    if(check(inputVal, toDoArr)){
        toDoArr.push({
            title:inputVal,
            completed:false,
        });
        showList()
        content.value="";
    }
   
}

function check(inputVal, arr){
    if(inputVal === ""){
        content.value="";
        alert("empty task")
        return false;
    }

    document.getElementById("task-list").style.display = "inline";
    document.getElementById("hide").style.display = "inline";

    for(let i=0; i<arr.length; i++){
        if(arr[i].title === inputVal){
            alert("same task...");
            content.value = "";
            return false;
        }
    }
    return true;
}

function showList() {
    toDoPreview.innerHTML = "";
    for(let i=0; i<toDoArr.length; i++){
        toDoPreview.innerHTML +=
        `<div class="d-flex box flex-row justify-content-between  "> 
    <span class="to-do-text ${toDoArr[i].completed ? "line-through":""}"> ${toDoArr[i].title}</span>  
     <span>
     <i class="fa-solid fa-check common  completeTask "onclick = "completeTask('${i}')"></i> 
     <i class="fa-regular fa-trash-can ms-2 common deleteTask "onclick = "deleteTask('${i}')"></i>
     </span>  `;
    }
}

function deleteTask(i){
    toDoArr.splice(i,1);
    showList();
}

function completeTask(i){
    toDoArr[i].completed = !toDoArr[i].completed;
     showList(); 
}

const done = document.getElementById('check-completed');
done.addEventListener("click", (e) => {
    completedArr=[]
    for(let i=0; i<toDoArr.length; i++){
       if(toDoArr[i].completed){
        completedArr.push(toDoArr[i]);
       }
    }
    showCompleted();
})

function showCompleted(){
    toDoPreview.innerHTML = "";
    for(let i=0; i<completedArr.length; i++){
        toDoPreview.innerHTML +=
        `<div class="d-flex box flex-row justify-content-between  "> 
    <span class="to-do-text ${completedArr[i].completed ? "line-through":""}"> ${completedArr[i].title}</span>  
     <span>
     <i class="fa-solid fa-check common  completeTask "onclick = "completeTask('${i}')"></i> 
     <i class="fa-regular fa-trash-can ms-2 common deleteTask "onclick = "deleteTask('${i}')"></i>
     </span>  `;
    }
}

const all = document.getElementById('showAll');

all.addEventListener("click", (e)=>{
    showList();
})

const toDo = document.getElementById('to-do');

toDo.addEventListener("click", (e)=>{
    active =[]
    for(let i=0; i<toDoArr.length; i++){
        if(!toDoArr[i].completed){
            active.push(toDoArr[i]);
        }
    }
    showActive();
})

function showActive() {
    toDoPreview.innerHTML = "";
    for(let i=0; i<active.length; i++){
        toDoPreview.innerHTML +=
        `<div class="d-flex box flex-row justify-content-between  "> 
    <span class="to-do-text ${active[i].completed }"> ${active[i].title}</span>  
     <span>
     <i class="fa-solid fa-check common  completeTask "onclick = "completeTask('${i}')"></i> 
     <i class="fa-regular fa-trash-can ms-2 common deleteTask "onclick = "deleteTask('${i}')"></i>
     </span>  `;
    }
}