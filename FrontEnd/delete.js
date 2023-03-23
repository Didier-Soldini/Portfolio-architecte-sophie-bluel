
/* On récupère les tokens depuis le localStorage */
const tokens = localStorage.getItem('tokens');

if (!tokens) {
    /* Traitement dans le cas où aucun token n'existe dans le localStorage */
}

/* Le localStorage stocke les données sous forme de chaines de caractères nous transformons donc la donnée en JSON */
const { accessToken, tokenType } = JSON.parse(tokens);

/* On créer l'en-tête Authorization contenant le JWT */
const headers = new Headers();
headers.append('Authorization', `${tokenType} ${accessToken}`);

const options = {
    method: 'DELETE',
    headers
};

/* On effectue la requête */
const response = await fetch('http://localhost:5678/api/works', options);
const data = await response.json();

    

