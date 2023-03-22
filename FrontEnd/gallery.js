
// Récupération de la galerie depuis le fichier JSON
const reponse = await fetch('http://localhost:5678/api/works');
const gallery = await reponse.json();

export function genererGallery() {
    //Boucle pour générer la galerie
    for (let i = 0; i < gallery.length; i++) {
        const figure = gallery[i];
        // Récupération de l'élément du DOM qui accueillera la galerie
        const divGallery = document.querySelector('.gallery');
        //Création d'une div pour filtrer par les id
        const categoryElement = document.createElement('div');
        categoryElement.className = 'gallery__item' + ' ' + figure.category.id;
        // Création d’une balise dédiée à une figure
        const figureElement = document.createElement('figure');
        figureElement.dataset.id = gallery[i].id
        // Création des balises 
        const imageElement = document.createElement('img');
        imageElement.src = figure.imageUrl;
        const nomElement = document.createElement('figcaption');
        nomElement.innerText = figure.title;


        // On rattache la balise article a la div gallery
        divGallery.appendChild(categoryElement);
        categoryElement.appendChild(figureElement);
        figureElement.appendChild(imageElement);
        figureElement.appendChild(nomElement);

    };

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
        trashElementModal.className = 'trash';
        const deleteElementModal = document.createElement('img');
        deleteElementModal.src = './assets/icons/trash.png';


        // On rattache la balise article a la div gallery
        divGalleryModal.appendChild(categoryElementModal);
        categoryElementModal.appendChild(figureElementModal);
        figureElementModal.appendChild(imageElementModal);
        figureElementModal.appendChild(nomElementModal);
        figureElementModal.appendChild(trashElementModal);
        trashElementModal.appendChild(deleteElementModal);

    }
}

