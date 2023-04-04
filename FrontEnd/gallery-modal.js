// Récupération de la galerie depuis le fichier JSON
const reponse = await fetch('http://localhost:5678/api/works');
const gallery = await reponse.json();



for (let i = 0; i < gallery.length; i++) {
    const figureModal = gallery[i];
    // Récupération de l'élément du DOM qui accueillera la galerie
    const divGalleryModal = document.querySelector('.gallery-modal');
    //Création d'une div pour filtrer par les id
    const categoryElementModal = document.createElement('div');
    categoryElementModal.className = 'gallery__item' + ' ' + figureModal.category.id;
    // Création d’une balise dédiée à une figure
    const figureElementModal = document.createElement('figure');
    figureElementModal.dataset.id = gallery[i].id;
    // Création des balises 
    const imageElementModal = document.createElement('img');
    imageElementModal.src = figureModal.imageUrl;
    const nomElementModal = document.createElement('a');
    nomElementModal.innerText = 'éditer';
    const trashElementModal = document.createElement('div');
    trashElementModal.id = 'img-' + gallery[i].id;
    trashElementModal.className = 'trash';
    trashElementModal.setAttribute('onclick', 'removeElement(' + gallery[i].id + ')');
    const deleteElementModal = document.createElement('img');
    deleteElementModal.src = './assets/icons/trash.png';
    

    // On rattache la balise article a la div gallery
    divGalleryModal.appendChild(categoryElementModal);
    categoryElementModal.appendChild(figureElementModal);
    figureElementModal.appendChild(imageElementModal);
    figureElementModal.appendChild(nomElementModal);
    figureElementModal.appendChild(trashElementModal);
    trashElementModal.appendChild(deleteElementModal);
};

    