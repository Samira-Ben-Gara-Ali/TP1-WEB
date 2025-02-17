const couleur = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;};
const cliquer = (el) => {
    el.addEventListener("click", (event) => {
        event.target.style.color = couleur();});};

        
cliquer(document.querySelector("ol"));