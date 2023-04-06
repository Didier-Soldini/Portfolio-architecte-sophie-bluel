


document.forms["fileinfo"].addEventListener("submit", function (e) {

    let erreur;

    let inputs = this;

    const button = document.getElementsByClassName('button__off');

    // Traitement générique
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
         button.classList.remove('button__off');
            button.classList.add('button');
    
           break;
    }
}
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
       
     } 
});

//--------------------------------------------------------------------------------------------------//


let inputElt = document.getElementById('title');
let btn = document.getElementById('submit');
// on commence par desactiver le bouton quand le javascript se charge
btn.disabled = true;

// ajout d'une fonction appelee des qu'une touche est enfoncee
function isCharSet() {
    // on verifie si le champ n'est pas vide alors on desactive le bouton sinon on l'active
    if (inputElt.value != "") {
        btn.disabled = false;
        btn.classList.remove("button__off");
        btn.classList.add("button");
    } else {
        btn.disabled = true;
    }
};