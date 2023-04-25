const token = localStorage.getItem('token')


async function removeElement(id) {
    await removeItemInGallery(id);
}

/**
 * methode qui permet d'afficher une prewiew de l'élément à créer dans la gallery
 * @param  pictures prewiew de l'image à crée
 */

let image = document.getElementById('image');
let pictures;
let previewPicture = function (e) {

    const [picture] = e.files
    pictures = e.files

    if (picture) {
        image.src = URL.createObjectURL(picture)
    }

    let types = ["image/jpg", "image/jpeg", "image/png"];

    if (types.includes(picture.type)) {
        document.querySelector('.post__logo-image').style.opacity = '0';
        document.querySelector('.post__button').style.opacity = '0';
        document.querySelector('.post__span').style.opacity = '0';
        document.querySelector('.post__preview').style.opacity = '100';
    }
};

/**
 * methode qui permet d'activer le boutton pour le post de l'élément à créer dans la gallery
 * @param  btn à activer
 */

let inputText = document.getElementById('title');
let inputCategory = document.getElementById('categoryId');
let btn = document.getElementById('submit');

btn.disabled = true;

function isCharSet() {
  
    if (!inputCategory.value, !inputText.value) {
        btn.disabled = false;
        btn.classList.remove("button__off");
        btn.classList.add("button");
    } else {
        btn.disabled = true;
        btn.classList.remove("button");
        btn.classList.add("button__off");
    }
}

/**
 * methode qui permet de créer un élément et de générer la gallery
 * @param formdata création de l'objet à poster
 * @returns {Promise<void>}
 */

document.forms['form'].addEventListener('submit',
    async function newPicture(e) {
        e.preventDefault();

        const formdata = new FormData(form);
        const formDataObj = {};
        document.querySelector('#file')
        formdata.append('image', pictures[0]);
        formdata.forEach((value, key) => (formDataObj[key] = value));

        const params = {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
            },
            body: formdata,
        };

        const url = ('http://localhost:5678/api/works')
        const postResponse = await httpPost(url, params)
        const objet = await postResponse;
        const categoryId = objet.categoryId;
        const id = objet.id;
        const imageUrl = objet.imageUrl;
        const title = objet.title;

        createGalleryItem(objet);
    })