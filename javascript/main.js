const head = document.getElementById("task-list");
const submit = document.getElementById("add-task-icon");

const content = document.getElementById("input-box");


const toDoPreview = document.getElementsByClassName("toDoList")[0];
const toDoArr = [];



function myFunction() {

    if (content.value === "") {
        alert('please fill the box');
        return false;
    }
    const task = {
        task: content.value,
    };
    toDoArr.push(task);

    showList();


    function showList() {
        toDoPreview.innerHTML = "";

        for (let a = 0; a < toDoArr.length; a++) {
            const tag = document.createElement("div");

            let title = toDoArr[a].task;

            tag.innerHTML = `<div class="d-flex justify-content-between gap-4 align-items-center"> <h5 class="listHead">${title}</h5>  <span><i class="fa-solid fa-check common completed" onclick="lineThrough()"></i> <i class="fa-regular fa-trash-can common ms-2"></i></span></div>`;

            toDoPreview.appendChild(tag);

            tag.classList.add("box");
            content.value = "";
        }
    }

    document.getElementById("task-list").style.display = "inline";

}

const completed = document.getElementsByClassName("completed");
const listHead = document.getElementsByClassName("to_buy")

var list

for (i = 0; i < listHead.length; i++) {
    list = listHead[i]
}


for (i = 0; i < completed.length; i++) {
    completed[i].onclick = function () {
        list[i].innerHTML.style.textDecoration = "line-through"
    }
}
