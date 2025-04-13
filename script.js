const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');
const deletedList = document.getElementById('deleted-list');

// Escuchar el evento de agregar tarea
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const task = input.value.trim();

  // Verificar que el input no esté vacío
  if (task === "") {
    alert("Por favor, agrega una tarea.");
    return;
  }

  // Llamar a la función para agregar la nueva tarea
  addTask(task);

  // Limpiar el input
  input.value = "";
});

// Función para agregar tarea
function addTask(taskText) {
  const li = document.createElement("li");
  li.classList.add('task');

  // Asignar el texto a la tarea
  li.textContent = taskText;

  // Crear botón de completar
  const completeButton = document.createElement("button");
  completeButton.textContent = "Completado";
  completeButton.classList.add("btn-complete");

  // Crear botón de eliminar
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.classList.add("btn-delete");

  // Añadir los botones al LI
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // Función para completar la tarea
  completeButton.addEventListener('click', function() {
    completedList.appendChild(li);
    li.classList.add('completed');
    completeButton.disabled = true;  // Deshabilitar el botón de completar una vez completada la tarea
  });

  // Función para eliminar la tarea
  deleteButton.addEventListener('click', function() {
    deletedList.appendChild(li);
    li.classList.add('deleted');
    completeButton.disabled = true;  // Deshabilitar los botones una vez eliminada
    deleteButton.disabled = true;
  });

  // Añadir la tarea a la lista de tareas activas
  todoList.appendChild(li);
}
