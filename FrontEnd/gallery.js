// Récupération de la galerie depuis le fichier JSON
const reponse = await fetch('http://localhost:5678/api/works');
const gallery = await reponse.json();

//Boucle pour généré la galerie
for (let i = 0; i < gallery.length; i++) {
const figure = gallery[i];
// Récupération de l'élément du DOM qui accueillera la galerie
const divGallery = document.querySelector('.gallery');
// Création d’une balise dédiée à une figure
const figureElement = document.createElement('figure');
figureElement.dataset.id = gallery[i].id
// Création des balises 
const imageElement = document.createElement('img');
imageElement.src = figure.imageUrl;
const nomElement = document.createElement('figcaption');
nomElement.innerText = figure.title;

// On rattache la balise article a la section gallery
divGallery.appendChild(figureElement);
figureElement.appendChild(imageElement);
figureElement.appendChild(nomElement);
}


     