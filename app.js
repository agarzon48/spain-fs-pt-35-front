import { Body } from "./modules/components/body.js";
import { NavBar } from "./modules/components/navBar.js";
import { todoCard } from "./modules/components/todoCard.js";

function render(){
    Body({todoCard});
    NavBar();
}
render();