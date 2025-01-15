let div = document.getElementById("container");

function CreateTask(item) {
    let tag = document.createElement("div");
    tag.id = item.id;

    tag.classList.add("task");

    let task_name = document.createElement("h1");
    let task_descricao = document.createElement("span");
    let task_priority = document.createElement("p");
    let task_prazo = document.createElement("p");
    let botao = document.createElement("button");

    task_name.textContent = item["nome"];
    task_descricao.textContent = item["descricao"];
    task_priority.textContent = item["importancia"];
    task_prazo.textContent = item["prazo"];

    botao.textContent = "deletar";
    botao.addEventListener("click", () => {
        document.getElementById(item.id).remove(); 
        RemoveFromLocalStorage(item);  // Remove do localStorage
    });

    tag.appendChild(task_name);
    tag.appendChild(task_descricao);
    tag.appendChild(task_priority);
    tag.appendChild(task_prazo);
    tag.appendChild(botao);

    div.appendChild(tag);

};

function RemoveFromLocalStorage(item) {
    // Recupera as tarefas salvas no localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Filtra a tarefa com o ID correspondente ao do item
    tasks = tasks.filter(task => task.id !== item.id);

    // Salva o array atualizado de tarefas no localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => {
    CreateTask(task);
});