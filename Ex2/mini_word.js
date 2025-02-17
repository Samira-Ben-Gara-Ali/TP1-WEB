const parag=document.querySelector("#prg");
const couleur=document.querySelector("#couleur");
const police=document.querySelector("#police");
const taille=document.querySelector("#taille");

couleur.addEventListener("input", function(){
    parag.style.color= couleur.value;
})

taille.addEventListener("change", function(){
parag.style.fontSize = taille.value + "px";
})
police.addEventListener("change", function(){
    parag.style.fontFamily = police.value;
})
