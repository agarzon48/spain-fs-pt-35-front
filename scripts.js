const navBar = document.querySelector("#main-nav");
const body = document.querySelector("#main-body");
const todoList = document.querySelector("#main-todo-card");

navBar.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <div class="d-flex justify-content-between w-100">
        <a class="navbar-brand" href="#">TODO List</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</div>
</nav>`

todoList.innerHTML = `<div class="card mb-5" style="width: 18rem;">
<div class="card-body">
    <div class="mb-3">
        <input type="title" class="form-control" name="title" placeholder="TODO">
    </div>
    <div class="mb-3">
        <input type="date" class="form-control" name="date" placeholder="">
    </div>
    <div class="mb-3">
        <textarea class="form-control" name="description" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger">URGENTE</button>
            <button type="button" class="btn btn-success">Hecho</button>
        </div>
    </div>
</div>
</div>`