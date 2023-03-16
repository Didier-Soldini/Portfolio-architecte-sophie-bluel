

        const loginPost = document.getElementById('login');
        loginPost.addEventListener("submit", function (event) {
        // Désactivation du comportement par défaut du navigateur
        event.preventDefault();
            const login = {
                email: (event.target.querySelector('[name=email]').value),
                password: (event.target.querySelector('[name=password]').value)
            };
             // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(login);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    });
});

const email = document.querySelector('input.mail');
email.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		}else {
e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
		}
	}
};


document.forms['login'].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;
 
	// Traitement cas par cas (input unique)
    
    if (inputs["password"].value != "S0phie") {
		erreur = "Mot de passe incorrecte";
	}


	if (inputs["email"].value != "sophie.bluel@test.tld") {
		erreur = "Adresse email incorrecte";
	}

   
	// Traitement générique
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
			break;
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		e.preventDefault(window.location.href="http://127.0.0.1:5500/FrontEnd/index.html");
	}
	
});


