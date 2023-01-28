//function que add task
function addTask(){
    //titulo da task
    const taskTitle = document.querySelector("#task-title").value;
    if(taskTitle){
        //clona template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);
        //addtitulo
        newTask.querySelector(".task-title").textContent = taskTitle;
        //remove
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);
       
        //add event de remover
        const removeBtn=newTask.querySelector(".remove-btn").addEventListener("click",function(){
            removeTask(this)
        })
        //add evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });
       
       
        //limpar texto
        document.querySelector("#task-title").value = "";

    }
}
//function de remove task
function removeTask(task){
    task.parentNode.remove(true)
}

//function completar tarefa
function completeTask(task){
   const taskComplete = task.parentNode;
   taskComplete.classList.toggle("done");
}



//event para add tasks
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click",function(e){
e.preventDefault();
addTask()
})