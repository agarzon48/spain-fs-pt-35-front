export function NewTaskModal(){
    const newTask = document.querySelector("#main-newTask");

    newTask.innerHTML =`
<button id="newTaskModalButton" type="button" class="mx-auto btn btn-success" data-bs-toggle="modal" data-bs-target="#newTaskModal">
    &#10004;
</button>


<div class="modal fade" id="newTaskModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
            <form id="taskForm" method="get">
                <div class="mb-3">
                    <label for="taskTittle" class="form-label">Task tittle</label>
                    <input type="text" class="form-control" id="taskTittle" aria-describedby="taskTittle">
                </div>
                <div class="mb-3">
                    <p for="taskDescription" class="form-label">Task Description</p>
                    <textarea class="form-control" id="taskDescription"></textarea>
                </div>
                <div class="mb-3 d-flex">
                    <div class="d-flex flex-column flex-grow-1">
                        <label for="taskDate" class="form-label">Task date:</label>
                        <input type="date" class="form-control" id="taskDate" aria-describedby="taskDate">
                    </div>
                    <div class="d-flex flex-column text-center form-check form-switch">
                        <label for="taskUrgent" class="form-label">Urgent task</label>
                        <input role="switch" type="checkbox" class="form-check-input mx-auto" id="taskUrgent" aria-describedby="taskUrgent">
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Exit</button>
          <input id="newTaskSubmit" type="submit" form="taskForm" class="btn btn-success" value="Save and exit" data-bs-dismiss="modal">
        </div>
      </div>
    </div>
</div>
`

}