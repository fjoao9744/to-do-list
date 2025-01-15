const form = document.getElementById("form");
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    let nome = form.elements['nome'].value;
    let descricao = form.elements['descricao'].value;
    let importancia = form.elements['option'].value;
    let prazo = form.elements['prazo'].value;

    let item = {"id": id, "nome": nome, "descricao": descricao, "importancia": importancia, "prazo": prazo};

    tasks.push(item);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

    window.location.href = "index.html";
})




