const nombreAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const jeuInitialisation=()=>{
let difficulte = prompt("Saisir la difficulte (1,2,3)");
while (!["1", "2", "3"].includes(difficulte)){
    difficulte = prompt("Saisir la difficulte (1,2,3)");
}
if (difficulte == 1) 
    return {min:1, max:10,essais : 6}
else if (difficulte == 2){
    return {min:1, max:30,essais : 4}
}
else if (difficulte == 3){
    return {min:1, max:50,essais : 3}
}
}


const jouer=()=>{
const parametres=jeuInitialisation();
const nombre=nombreAleatoire(parametres.min, parametres.max);
let essais=parametres.essais;
let test = false;

alert(`Trouvez le nombre entre ${parametres.min} et ${parametres.max}. Vous avez ${essais} essais.`);

while(essais>0){
    essais --;
    var input = prompt("Enter un nombre:");
    if(input == nombre){
        window.alert("Vous avez gagner !!");
        essais =0;
    }
    else {
        window.alert("Attention il vous reste " + essais + " essaies." );
    }
    
}
if (!test) {
    alert(`Echec, Le nombre est: ${nombre}.`);
}
if (confirm("Voulez vous rejouer ?")) {
    jouer();
} else {
    alert("Au revoir.");
}
};
jouer();