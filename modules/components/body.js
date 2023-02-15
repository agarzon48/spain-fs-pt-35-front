
export function Body({todoCard}){
    const body = document.querySelector("#main-body");
    
    body.innerHTML = `
    <div class="container bg-light-subtle d-flex flex-column align-items-center">
        <h1 class="text-center mb-5">TO-DO</h1>
        ${todoCard}
    </div>`
}