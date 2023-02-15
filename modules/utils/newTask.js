export function NewTask(event){
    event.preventDefault();
    let task = {}
    let $ = element => document.querySelector(element);
    task.tittle = $("#taskTittle").value
    task.description = $("#taskDescription").value
    task.date = $("#taskDate").value
    task.urgent = $("#taskUrgent").checked ? true : false ;
    console.log(task)
    return task
}