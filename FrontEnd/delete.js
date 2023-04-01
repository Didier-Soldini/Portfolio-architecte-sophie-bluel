
let id = document.querySelector('#trash').dataset.id;

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
console.log(options)
fetch(`http://localhost:5678/api/works/${id}`, options)
    .then(response => response.json());
return json;



