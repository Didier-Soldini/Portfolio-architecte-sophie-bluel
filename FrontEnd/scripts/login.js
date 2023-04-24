const loginPost = document.getElementById('login');
const mail = document.querySelector('input.mail');

/**
 * permet de se connecter lors du submit du login
 */
loginPost.addEventListener("submit", async function (event) {

    event.preventDefault();

    const login = {
        password: (event.target.querySelector('[name=password]').value),
        email: (event.target.querySelector('[name=email]').value),
    };
    const chargeUtile = JSON.stringify(login);
    const params = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: chargeUtile
    }
    const url = "http://localhost:5678/api/users/login";
    const loginState = await httpGet(url, params);

    if (loginState.hasOwnProperty('message')) {
        sendErrorsMessage('erreur', 'Erreur dans l’identifiant ou le mot de passe')
    } else if (loginState.hasOwnProperty('error')) {
        sendErrorsMessage('erreur', 'Erreur dans l’identifiant ou le mot de passe')
    } else {
        window.localStorage.setItem('token', loginState.token);
        window.location.href = 'edit.html';
    }

});

/**
 * permet de check la validité d'un email
 * @type {Element}
 */
mail.oninvalid = function (e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
        if (e.target.value.length === 0) {
            e.target.setCustomValidity("Ce champ est obligatoire");
        } else {
            e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
        }
    }
};