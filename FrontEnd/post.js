//-------------------------PREVIEW IMAGE-----------------------------------------//

// L'image img#image
let image = document.getElementById('image');

let pictures;

// La fonction previewPicture
let previewPicture = function (e) {

    // e.files contient un objet FileList
    const [picture] = e.files

    pictures = e.files
    // "picture" est un objet File
    if (picture) {
        // On change l'URL de l'image
        image.src = URL.createObjectURL(picture)
    }
    // Les types de fichier autorisés
    let types = ["image/jpg", "image/jpeg", "image/png"];

    // Vérification si "picture.type" se trouve dans "types"
    if (types.includes(picture.type)) {
        // On affiche l'image sur la page ...
        document.querySelector('.post__logo-image').style.opacity = '0';
        document.querySelector('.post__button').style.opacity = '0';
        document.querySelector('.post__span').style.opacity = '0';
        document.querySelector('.post__preview').style.opacity = '100';
    }
};

//-----------------------ACTIVE BOUTON--------------------------------//

let inputFile = document.getElementById('file');
let inputText = document.getElementById('title');
let inputCategory = document.getElementById('categoryId');
let btn = document.getElementById('submit');
// on commence par desactiver le bouton quand le javascript se charge
btn.disabled = true;

// ajout d'une fonction appelee des qu'une touche est enfoncee
function isCharSet() {
    // on verifie si le champ n'est pas vide alors on desactive le bouton sinon on l'active
    if (inputFile.value !=true, inputText.value != true, inputCategory.value !="") {
        btn.disabled = false;
        btn.classList.remove("button__off");
        btn.classList.add("button");
    } else {
        btn.disabled = true;
        btn.classList.remove("button");
        btn.classList.add("button__off");
    }
};
//-----------------------------POST----------------------------//


const form = document.getElementById('form');

form.addEventListener('submit', newPicture);

async function newPicture(event) {
    event.preventDefault();



    const formdata = new FormData(form);


    const formDataObj = {};
    document.querySelector('#file')
    formdata.append('image', pictures[0]);
    formdata.forEach((value, key) => (formDataObj[key] = value));

    const token = localStorage.getItem('token')

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `bearer ${token}`,
        },
        body: formdata,
    };

    await fetch('http://localhost:5678/api/works', options)
        .then((response) => {
            console.log(response);
            
            const userData = response.json();
            console.log(userData);

            userData.then((objet)=>{
                console.log(objet);

                const categoryId = objet.categoryId;
                const id = objet.id;
                const imageUrl = objet.imageUrl;
                const title = objet.title;
                const userId = objet.userId;

                console.log(categoryId, id, imageUrl,title,userId);

                const divGallery = document.querySelector('.gallery');
                const categoryElement = document.createElement('div');
                categoryElement.className = 'gallery__item' + ' ' + objet.categoryId;
                // Création d’une balise dédiée à une figure
                const figureElement = document.createElement('figure');
                figureElement.dataset.id = objet.id;
                // Création des balises 
                const imageElement = document.createElement('img');
                imageElement.src = objet.imageUrl;
                const nomElement = document.createElement('figcaption');
                nomElement.innerText = objet.title;


                // On rattache la balise article a la div gallery
                divGallery.appendChild(categoryElement);
                categoryElement.appendChild(figureElement);
                figureElement.appendChild(imageElement);
                figureElement.appendChild(nomElement);

                const divGalleryModal = document.querySelector('.gallery-modal');
                //Création d'une div pour filtrer par les id
                const categoryElementModal = document.createElement('div');
                categoryElementModal.className = 'gallery__item' + ' ' + objet.categoryId;
                // Création d’une balise dédiée à une figure
                const figureElementModal = document.createElement('figure');
                // Création des balises 
                const imageElementModal = document.createElement('img');
                imageElementModal.src = objet.imageUrl;
                const nomElementModal = document.createElement('a');
                nomElementModal.innerText = 'éditer';
                const trashElementModal = document.createElement('div');
                trashElementModal.id = 'img-' + objet.id;
                trashElementModal.className = 'trash';
                const deleteElementModal = document.createElement('img');
                deleteElementModal.src = './assets/icons/trash.png';
                const moveElementModal = document.createElement('div');
                moveElementModal.className = 'move';
                const arrowElementModal = document.createElement('img');
                arrowElementModal.src = './assets/icons/4-arrows-solid.png';
                // On rattache la balise article a la div gallery
                divGalleryModal.appendChild(categoryElementModal);
                categoryElementModal.appendChild(figureElementModal);
                figureElementModal.appendChild(imageElementModal);
                figureElementModal.appendChild(nomElementModal);
                figureElementModal.appendChild(trashElementModal);
                figureElementModal.appendChild(moveElementModal);
                trashElementModal.appendChild(deleteElementModal);
                moveElementModal.appendChild(arrowElementModal);
            })

        });
};
