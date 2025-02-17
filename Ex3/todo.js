const addButton = document.querySelector("#addButton")
addButton.addEventListener("click", function(event)
{
    event.preventDefault();
    const inputName = document.getElementById("inputName").value.trim();
    const inputContent = document.getElementById("inputContent").value.trim();
    const container = document.querySelector("#todoContainer");

if((inputName!="") &&(inputContent!="")){
    const todo = document.createElement("div");
    const texte = document.createElement("span");
    todo.className = "todo-item";
    texte.innerHTML = `${inputName}: ${inputContent}`;


        
        var delButton=document.createElement("button");
        delButton.className = "btn"
        delButton.innerText = "🗑️ Supprimer";

       

        todo.appendChild(texte);
        todo.appendChild(delButton);
        container.appendChild(todo);
        
        delButton.addEventListener("click", function () {
            todo.remove();
        });

       
        document.getElementById("inputName").value = "";
        document.getElementById("inputContent").value = "";

}
else {
    alert("Il faut remplir tous les champs !!");
}
});