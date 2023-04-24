/**
* generation de la gallery de l'index
* @param item: L'image que l'on veut rajouter dans le DOM
*/
function generateGalleryItem(item) {

    const figure = item;
    const divGallery = document.querySelector('.gallery');
    const categoryElement = document.createElement('div');
    const figureElement = document.createElement('figure');
    const imageElement = document.createElement('img');
    const nomElement = document.createElement('figcaption');

    categoryElement.className = 'gallery__item' + ' ' + figure.category.id;

    figureElement.dataset.id = item.id
    imageElement.src = figure.imageUrl;
    nomElement.innerText = figure.title;

    divGallery.appendChild(categoryElement);
    categoryElement.appendChild(figureElement);
    figureElement.appendChild(imageElement);
    figureElement.appendChild(nomElement);

}

/**
 * generation de la gallery dans la modal
 * @param item L'image que l'on veut rajouter dans le DOM
 */
function generateModalGalleryItem(item) {

    const figureModal = item;
    const arrowElementModal = document.createElement('img');
    const divGalleryModal = document.querySelector('.gallery-modal');
    const categoryElementModal = document.createElement('div');
    const figureElementModal = document.createElement('figure');
    const imageElementModal = document.createElement('img');
    const nomElementModal = document.createElement('a');
    const trashElementModal = document.createElement('div');
    const deleteElementModal = document.createElement('img');
    const moveElementModal = document.createElement('div');

    categoryElementModal.className = 'gallery__item' + ' ' + figureModal.category.id;
    imageElementModal.src = figureModal.imageUrl;
    nomElementModal.innerText = 'éditer';
    trashElementModal.id = 'img-' + item.id;
    trashElementModal.className = 'trash';
    deleteElementModal.src = './assets/icons/trash.png';
    moveElementModal.className = 'move';
    arrowElementModal.src = './assets/icons/4-arrows-solid.png';

    trashElementModal.addEventListener('click', (e) => {
        e.preventDefault();
        removeElement(item.id);
    });

    divGalleryModal.appendChild(categoryElementModal);
    categoryElementModal.appendChild(figureElementModal);
    figureElementModal.appendChild(imageElementModal);
    figureElementModal.appendChild(nomElementModal);
    figureElementModal.appendChild(trashElementModal);
    figureElementModal.appendChild(moveElementModal);
    trashElementModal.appendChild(deleteElementModal);
    moveElementModal.appendChild(arrowElementModal);
}

/**
 * nettoyage des gallery lors de la supression
 * @param gallery
 */
function cleanGallery(gallery) {
    while (gallery.firstChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

/**
 * methode qui permet de supprimer un élément et de regénérer la gallery entièrement
 * @param id identifiant de l'image à supprimer
 * @returns {Promise<void>}
 */
async function removeItemInGallery(id) {

    const divGallery = document.querySelector('.gallery');
    const divGalleryModal = document.querySelector('.gallery-modal');

    cleanGallery(divGalleryModal);
    cleanGallery(divGallery);

    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
    };

    const url = `http://localhost:5678/api/works/${id}`;
    const response = await httpDelete(url, params)
    if (response) {
        const params = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        const gallery = await httpGet('http://localhost:5678/api/works', params)

        for (let i = 0; i < gallery.length; i++) {
            generateGalleryItem(gallery[i]);
        }
    
        for (let i = 0; i < gallery.length; i++) {
            generateModalGalleryItem(gallery[i]);
        }
    }
}

/**
 * methode qui permet de créer un élément et de l'afficher dans la gallery
 * @param objet identifiant de l'image à crée
 */
function createGalleryItem(objet) {

    const divGallery = document.querySelector('.gallery');
    const categoryElement = document.createElement('div');
    const figureElement = document.createElement('figure');
    const imageElement = document.createElement('img');
    const nomElement = document.createElement('figcaption');

    categoryElement.className = 'gallery__item' + ' ' + objet.categoryId;
    figureElement.dataset.id = objet.id;
    imageElement.src = objet.imageUrl;
    nomElement.innerText = objet.title;

    divGallery.appendChild(categoryElement);
    categoryElement.appendChild(figureElement);
    figureElement.appendChild(imageElement);
    figureElement.appendChild(nomElement);

    const divGalleryModal = document.querySelector('.gallery-modal');
    const categoryElementModal = document.createElement('div');
    const figureElementModal = document.createElement('figure');
    const imageElementModal = document.createElement('img');
    const nomElementModal = document.createElement('a');
    const trashElementModal = document.createElement('div');
    const deleteElementModal = document.createElement('img');
    const moveElementModal = document.createElement('div');
    const arrowElementModal = document.createElement('img');

    categoryElementModal.className = 'gallery__item' + ' ' + objet.categoryId;
    imageElementModal.src = objet.imageUrl;
    nomElementModal.innerText = 'éditer';
    trashElementModal.id = 'img-' + objet.id;
    trashElementModal.className = 'trash';
    deleteElementModal.src = './assets/icons/trash.png';
    moveElementModal.className = 'move';
    arrowElementModal.src = './assets/icons/4-arrows-solid.png';
    trashElementModal.addEventListener('click', (e) => {
        e.preventDefault();
        removeElement(objet.id);
    });

    divGalleryModal.appendChild(categoryElementModal);
    categoryElementModal.appendChild(figureElementModal);
    figureElementModal.appendChild(imageElementModal);
    figureElementModal.appendChild(nomElementModal);
    figureElementModal.appendChild(trashElementModal);
    figureElementModal.appendChild(moveElementModal);
    trashElementModal.appendChild(deleteElementModal);
    moveElementModal.appendChild(arrowElementModal);
}




