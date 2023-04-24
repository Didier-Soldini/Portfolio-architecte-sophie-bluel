const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
};

const BouttonsFiltres = await httpGet('http://localhost:5678/api/categories', params)

/**
 * generation des boutons au dessus de la gallery sur la home page
 */
export function genererBouttons() {
    //Boucle pour générer les boutons
    for (let i = 0; i < BouttonsFiltres.length; i++) {

        const button = BouttonsFiltres[i];
        const divFiltres = document.querySelector('.filtres');
        const buttonElement = document.createElement('span');

        buttonElement.dataset.id = BouttonsFiltres[i].id
        buttonElement.className = 'filtres__button';
        buttonElement.innerText = button.name
        buttonElement.setAttribute('data-filter', button.id);

        divFiltres.appendChild(buttonElement);

    }
}