loadEvents();
// load every event in the page
function loadEvents(){
    document.querySelector('form').addEventListener('submit',submit);
    document.querySelector('.list-todo').addEventListener('click',deleteOrTick);
}

// subit data function
function submit(e){
    e.preventDefault();
    let input = document.querySelector('.form-input');
    if(input.value != '') addTask(input.value);
    input.value = '';
}

// add tasks
function addTask(task){
    let listContainer = document.querySelector('.list-todo');
    let listItem = document.createElement('div');

    listItem.className = "todo-item";    
    listItem.innerHTML = `<div class="todo-item-left"><img class="item-button" src="assets/item.png" alt="-" ><label>${task}</label></div><img class="delete-button" src="assets/delete.png" alt="x" >`;
    
    listContainer.appendChild(listItem);
}

// deleteTick
function deleteOrTick(e){
    if(e.target.className == 'delete-button'){
        deleteTask(e);
    }
    else {
        tickTask(e);
    }
}

// delete task
function deleteTask(e){
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// tick a task
function tickTask(e){
    const tickButton = e.target;
    const itemText = e.target.nextSibling;

    if(itemText.className === "item-done"){
        tickButton.src = "assets/item.png";
        itemText.style.textDecoration = "none";
        itemText.className = ""
    }else {
        tickButton.src = "assets/item-done.png";
        itemText.style.textDecoration = "line-through";
        itemText.className = "item-done"
    }
}