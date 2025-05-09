let input = document.querySelector('input');
let addTask = document.querySelector("#add");
let clear = document.querySelector("#clear");
let taskList = document.querySelector('#task-list')

addTask.addEventListener('click', () => {
    const taskText = input.value;
    if (taskText === "") return; // don't add empty tasks

    let newTask = document.createElement('li');
    newTask.innerText = taskText;

    newTask.classList.add("task-item");

    // add delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(newTask);
    });

    // add a checkBox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check-box");

    const label = document.createElement('span');
    label.textContent = taskText;
    label.classList.add("task-text");


checkbox.addEventListener('change', () => {
    label.classList.toggle('done');

});


    taskList.appendChild(newTask);
    newTask.appendChild(checkbox); 
    newTask.appendChild(label);    
    newTask.appendChild(deleteBtn); 

    
});


clear.addEventListener('click', () => {
    input.value = "";
});