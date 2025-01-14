const elementsTag = localStorage.getItem('tag');

const tag = document.createElement("p");
tag.innerHTML = elementsTag;

if (tag){
document.getElementById("tasks").appendChild(tag);

}