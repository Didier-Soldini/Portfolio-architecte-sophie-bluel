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
    trashElementModal.addEventListener('click', (e) => {
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

function removeElement(id) {

    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        },
        body: JSON.stringify({

        })
    };

    const divGallery = document.querySelector('.gallery');
    const divGalleryModal = document.querySelector('.gallery-modal');
    while (divGallery.firstChild) {
        divGallery.removeChild(divGallery.lastChild);
    }

    while (divGalleryModal.firstChild) {
        divGalleryModal.removeChild(divGalleryModal.lastChild);
    }

    fetch(`http://localhost:5678/api/works/${id}`, options)
        .then(async () => {
            const reponse = await fetch('http://localhost:5678/api/works');
            const gallery = await reponse.json();
            console.log(gallery)
            console.log(divGallery)

            for (let i = 0; i < gallery.length; i++) {
                const figure = gallery[i];
                // Récupération de l'élément du DOM qui accueillera la galerie
                
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

            }

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
                trashElementModal.addEventListener('click', (e) => {
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
            }
        })
};


