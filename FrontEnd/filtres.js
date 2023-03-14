
// Récupération de la galerie depuis le fichier JSON
const reponse = await fetch('http://localhost:5678/api/categories');
const BouttonsFiltres = await reponse.json();

export function genererBouttons(){
//Boucle pour généré les boutons
for (let i = 0; i < BouttonsFiltres.length; i++) {
    const button = BouttonsFiltres[i];
// Récupération de l'élément du DOM qui accueillera les boutons
const divFiltres = document.querySelector('.filtres');
// Création d’une balise dédiée à un bouton
const buttonElement = document.createElement('div');
buttonElement.dataset.id = BouttonsFiltres[i].id
buttonElement.className = 'filtres__button';
buttonElement.innerText = button.name

// On rattache la balise article a la div filtres
divFiltres.appendChild(buttonElement);
}
}


 


