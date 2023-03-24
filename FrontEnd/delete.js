document.querySelector('.trash').addEventListener('click', deleteWorks);

function deleteWorks () {
        console.log(deleteWorks)
     alert("ok");
}

/* On récupère les tokens depuis le localStorage */
const token = localStorage.getItem('token');

if (!token) {
    /* Traitement dans le cas où aucun token n'existe dans le localStorage */
}

/* Le localStorage stocke les données sous forme de chaines de caractères nous transformons donc la donnée en JSON */
const { accessToken, tokenType } = JSON.parse(token);

/* On créer l'en-tête Authorization contenant le JWT */
const headers = new Headers();
headers.append('Authorization', `${tokenType} ${accessToken}`);

const options = {
    method: 'DELETE',
    headers
};

/* On effectue la requête */
const response = await fetch(`http://localhost:5678/api/works/${id}`, options)
const gallery = await reponse.json()
.then((response) => response.json())
    .then((json) => afficheResuktats(json))

for (let i = 0; i < gallery.length; i++) {
    
    
}

