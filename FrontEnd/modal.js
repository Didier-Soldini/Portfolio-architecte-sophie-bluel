//ouvrir et afficher modale et focus à l'interieur de la modale
const focusableSelector = 'button, a, input, textarea';
let modal = null
    , focusables = []
    , previouslyFocusedElement = null;
const openModal = async function (e) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    modal = target.startsWith('#') ? document.querySelector(target) : await loadModal(target),
        focusables = Array.from(modal.querySelectorAll(focusableSelector)),
        previouslyFocusedElement = document.querySelector(':focus'),
        modal.style.display = null,
        focusables[0].focus(),
        modal.removeAttribute('aria-hidden'),
        modal.setAttribute('aria-modal', 'true'),
        modal.addEventListener("click", closeModal),
        modal.querySelector('.js-modal-close').addEventListener('click', closeModal),
        modal.querySelector('.js-modal-2').addEventListener('click', closeModal),
        modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}
    //fermer la modale
    , closeModal = function (e) {
        if (null === modal)
            return;
        null !== previouslyFocusedElement && previouslyFocusedElement.focus(),
            e.preventDefault(),
            modal.setAttribute('aria-hidden', 'true'),
            modal.removeAttribute('aria-modal'),
            modal.removeEventListener('click', closeModal),
            modal.querySelector('.js-modal-close').removeEventListener('click', closeModal),
            modal.querySelector('.js-modal-2').removeEventListener('click', closeModal),
            modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
        //annimation fermer modale    
        const close = function () {
            modal.style.display = 'none',
                modal.removeEventListener('animationend', close),
                modal = null
        };
        modal.addEventListener('animationend', close)
    }
    //empecher la fermeture au click à l'interieur de la modale
    , stopPropagation = function (e) {
        e.stopPropagation()
    }
    //garde le focus dans la modale
    , focusInModal = function (e) {
        e.preventDefault();
        let index = focusables.findIndex(e => e === modal.querySelector(':focus'));
        !0 === e.shiftKey ? index-- : index++,
            index >= focusables.length && (index = 0),
            index < 0 && (index = focusables.length - 1),
            focusables[index].focus()
    }

// Sélection de tous les liens à l'interieur de la modale    
document.querySelectorAll('.js-modal').forEach(e => {
    e.addEventListener('click', openModal)
}
),

    document.querySelectorAll('.js-modal2-return').forEach(e => {
        e.addEventListener('click', openModal)
    }
    ),
    //fermer la modale avec echap et laisser le tab dans la modale
    window.addEventListener('keydown', function (e) {
        'Escape' !== e.key && "Esc" !== e.key || closeModal(e),
            'Tab' === e.key && null !== modal && focusInModal(e)
    });


//-------------------------PREVIEW IMAGE-----------------------------------------//

// L'image img#image
let image = document.getElementById('image');

let pictures;

// La fonction previewPicture
let previewPicture = function (e) {

    // e.files contient un objet FileList
    const [picture] = e.files

    pictures=e.files
    // "picture" est un objet File
    if (picture) {
        // On change l'URL de l'image
        image.src = URL.createObjectURL(picture)
    }
    console.log(image.src)
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
}



//------------------------------POST--------------------------------//

let inputFile = document.getElementById('file');
let inputText = document.getElementById('title');
let inputCategory = document.getElementById('categoryId');
let btn = document.getElementById('submit');
// on commence par desactiver le bouton quand le javascript se charge
btn.disabled = true;

// ajout d'une fonction appelee des qu'une touche est enfoncee
function isCharSet() {
    // on verifie si le champ n'est pas vide alors on desactive le bouton sinon on l'active
    if (inputFile.value != "", inputText.value != "", inputCategory.value != "") {
        btn.disabled = false;
        btn.classList.remove("button__off");
        btn.classList.add("button");
    } else {
        btn.disabled = true;
        btn.classList.remove("button");
        btn.classList.add("button__off");
    }
};
//---------------------------------------------------------//


const form = document.forms.namedItem('fileinfo');

form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
    event.preventDefault();

    const formdata = new FormData(form);

    const file = document.querySelector('#file')
    formdata.append('image', pictures[0]);


    for (item of formdata) {
        console.log(item[0], item[1]);
    };

    const formDataObj = {};
    formdata.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);


    const token = localStorage.getItem('token')

    const options = {
        method: 'POST',
        headers: {
            
            'Authorization': `bearer ${token}`,
        },
        body: formdata,
    };

    fetch('http://localhost:5678/api/works', options)
        .then(response => response.json())
        .then(response => console.log(response));

};



