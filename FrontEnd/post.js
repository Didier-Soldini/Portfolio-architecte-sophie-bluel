function postElement() {
    postElement().preventDefault();

    const submit = document.getElementById('sumbit');

    const getFormData = () => {
        const form = document.getElementById('form');
        return new FormData(form);
    }

    const toJson = function (event) {
        const formData = getFormData();
        event.preventDefault();
        let object = {};
        formData.forEach((value, key) => {
            if (!Reflect.has(object, key)) {
                object[key] = value;
                return;
            }
            if (!Array.isArray(object[key])) {
                object[key] = [object[key]];
            }
            object[key].push(value);
        });

    };
    submit.addEventListener('click', toJson, async function (event) {
        // Désactivation du comportement par défaut du navigateur
        event.preventDefault();
        // Création de la charge utile au format JSON
        const token = localStorage.getItem('token')
        // Appel de la fonction fetch avec toutes les informations nécessaires
        await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify
        })
    });
}






