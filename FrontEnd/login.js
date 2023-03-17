

const loginPost = document.getElementById('login');

loginPost.addEventListener("submit", async function (event) {
	// Désactivation du comportement par défaut du navigateur
	event.preventDefault();
	const login = {
		email: (event.target.querySelector('[name=email]').value),
		password: (event.target.querySelector('[name=password]').value)
	};
	// Création de la charge utile au format JSON
	const chargeUtile = JSON.stringify(login);
	// Appel de la fonction fetch avec toutes les informations nécessaires
	const reponse = await fetch("http://localhost:5678/api/users/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: chargeUtile
	})
	const loginState = await reponse.json();
	console.log(loginState)
	if (loginState.hasOwnProperty('message')) {
		console.log('erreur')
	} else {
		window.localStorage.setItem('token', loginState.token);
		window.location.href = 'index.html';
	}
	
});

//conditions d'erreurs

//format email valide
const email = document.querySelector('input.mail');
email.oninvalid = function (e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
			e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
			e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
		}
	}
};
