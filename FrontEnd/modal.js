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
            modal.querySelector(".js-modal-close").removeEventListener('click', closeModal),
            modal.querySelector(".js-modal-stop").removeEventListener('click', stopPropagation);
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
    //fermer la modale avec echap et laisser le tab dans la modale
    window.addEventListener('keydown', function (e) {
        'Escape' !== e.key && "Esc" !== e.key || closeModal(e),
            'Tab' === e.key && null !== modal && focusInModal(e)
    });
