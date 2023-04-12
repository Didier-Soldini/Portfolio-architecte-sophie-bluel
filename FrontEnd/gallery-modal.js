import { genererGallery } from "./gallery.js";

genererGallery()
// Récupération de la galerie depuis le fichier JSON
const reponse = await fetch('http://localhost:5678/api/works');
const gallery = await reponse.json();
const token = localStorage.getItem('token')


for (let i = 0; i < gallery.length; i++) {
    const figureModal = gallery[i];
    // Récupération de l'élément du DOM qui accueillera la galerie
    const divGalleryModal = document.querySelector('.gallery-modal');
    //Création d'une div pour filtrer par les id
    const categoryElementModal = document.createElement('div');
    categoryElementModal.className = 'gallery__item' + ' ' + figureModal.category.id;
    // Création d’une balise dédiée à une figure
    const figureElementModal = document.createElement('figure');
    // Création des balises 
    const imageElementModal = document.createElement('img');
    imageElementModal.src = figureModal.imageUrl;
    const nomElementModal = document.createElement('a');
    nomElementModal.innerText = 'éditer';
    const trashElementModal = document.createElement('div');
    trashElementModal.id = 'img-' + gallery[i].id;
    trashElementModal.className = 'trash';
    const deleteElementModal = document.createElement('img');
    deleteElementModal.src = './assets/icons/trash.png';
    const moveElementModal = document.createElement('div');
    moveElementModal.className = 'move';
    const arrowElementModal = document.createElement('img');
    arrowElementModal.src = './assets/icons/4-arrows-solid.png';
    // Sélection de l'id img- + id de la galerie pour le POST DELETE
    trashElementModal.addEventListener('click', (e)=>{
       e.preventDefault();
        removeElement(gallery[i].id);
    });
    // On rattache la balise article a la div gallery
    divGalleryModal.appendChild(categoryElementModal);
    categoryElementModal.appendChild(figureElementModal);
    figureElementModal.appendChild(imageElementModal);
    figureElementModal.appendChild(nomElementModal);
    figureElementModal.appendChild(trashElementModal);
    figureElementModal.appendChild(moveElementModal);
    trashElementModal.appendChild(deleteElementModal);
    moveElementModal.appendChild(arrowElementModal);
};

async function removeElement(id)  {
    
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        },
        body: JSON.stringify({

        })
    };

    await fetch(`http://localhost:5678/api/works/${id}`, options)

       
};

