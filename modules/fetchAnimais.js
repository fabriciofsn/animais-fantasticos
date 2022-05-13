import animaNumeros from "./animaNumeros.js";

export default function fetchAnimais(){

}

async function initFetchAnimais(url){
    const animaisResponse = await fetch(url);
    const jsonAnimais = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');

    jsonAnimais.forEach(animal =>{
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    })
    
    animaNumeros();
}

function createAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3>`;
    div.innerHTML += `<span data-numero>${animal.total}</span>`;
    
    return div;
}

initFetchAnimais('./animaisapi.json');