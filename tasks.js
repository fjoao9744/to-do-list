const form = document.getElementById("form");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    let nome = form.elements['nome'].value;
    let tags = form.elements['tags'].value;
    let importancia = form.elements['option'].value;
    let prazo = form.elements['prazo'].value;

    let item = {"nome": nome, "tags": tags, "importancia": importancia, "prazo": prazo};

    CreateTask(item);

    window.location.href = "index.html";
})

function CreateTask(item) {
    let tag = document.createElement("p");
    tag.innerHTML = "smogon";

    localStorage.setItem('tag', tag.innerHTML);

}


