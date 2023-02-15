import { Body } from "./modules/components/body.js";
import { NavBar } from "./modules/components/navBar.js";
import { todoCard } from "./modules/components/todoCard.js";
import { NewTaskModal } from "./modules/components/newTaskModal.js";
import { NewTask } from "./modules/utils/newTask.js";

function render(){
    Body({todoCard});
    NavBar();
    NewTaskModal();
}
render();

let newTaskSubmit = document.querySelector("#newTaskSubmit");
newTaskSubmit.addEventListener("click", NewTask)


