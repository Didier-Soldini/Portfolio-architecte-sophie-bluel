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

//------------------------------DELETE--------------------------------//


function removeElement(id) {


    const token = localStorage.getItem('token')

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        },
        body: JSON.stringify({
            
        })
    };

    fetch(`http://localhost:5678/api/works/${id}`, options)
        .then(response => response.json());
    return json;

}

//-------------------------PREVIEW IMAGE-----------------------------------------//

// L'image img#image
let image = document.getElementById("image");

// La fonction previewPicture
let previewPicture = function (e) {

    // e.files contient un objet FileList
    const [picture] = e.files
   
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


const form = document.getElementById('form');

form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
     event.preventDefault();
    const myFormData = new FormData(event.target);

    const file =document.querySelector('#file');
    myFormData.append('imageUrl', file.files[0])

    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj);

    
    const token = localStorage.getItem('token')
    
      const options = {
        method: 'POST',
        headers: {
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
        },
          body: myFormData,
    };

    fetch('http://localhost:5678/api/works', options)
        .then(response => response.json());
       
};
