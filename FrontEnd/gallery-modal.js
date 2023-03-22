
// Récupération de la galerie depuis le fichier JSON
const reponseModal = await fetch('http://localhost:5678/api/works');
const galleryModal = await reponseModal.json();

export function genererGalleryModal() {
    //Boucle pour générer la galerie
    for (let i = 0; i < galleryModal.length; i++) {
        const figureModal = galleryModal[i];
        // Récupération de l'élément du DOM qui accueillera la galerie
        const divGalleryModal = document.querySelector('.gallery-modal');
        //Création d'une div pour filtrer par les id
        const categoryElementModal = document.createElement('div');
        categoryElementModal.className = 'gallery__item' + ' ' + figureModal.category.id;
        // Création d’une balise dédiée à une figure
        const figureElementModal = document.createElement('figure');
        figureElementModal.dataset.id = gallery[i].id
        // Création des balises 
        const imageElementModal = document.createElement('img');
        imageElementModal.src = figureModal.imageUrl;
        const nomElementModal = document.createElement('figcaption');
        nomElementModal.innerText = figureModal.title;


        // On rattache la balise article a la div gallery
        divGalleryModal.appendChild(categoryElementModal);
        categoryElementModal.appendChild(figureElementModal);
        figureElementModal.appendChild(imageElementModal);
        figureElementModal.appendChild(nomElementModal);

    }
}
