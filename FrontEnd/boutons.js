
// Récupération des bouttons depuis le fichier JSON
const reponse = await fetch('http://localhost:5678/api/categories');
const BouttonsFiltres = await reponse.json();

export function genererBouttons(){
//Boucle pour générer les boutons
for (let i = 0; i < BouttonsFiltres.length; i++) {
    const button = BouttonsFiltres[i];
// Récupération de l'élément du DOM qui accueillera les boutons
const divFiltres = document.querySelector('.filtres');
// Création d’une balise dédiée à un bouton
const buttonElement = document.createElement('span');
buttonElement.dataset.id = BouttonsFiltres[i].id
buttonElement.className = 'filtres__button';
buttonElement.innerText = button.name
buttonElement.setAttribute ('data-filter',button.id);


// On rattache la balise article a la div filtres
divFiltres.appendChild(buttonElement);

}
}
