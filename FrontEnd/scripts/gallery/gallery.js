// Récupération de la galerie depuis le fichier JSON

const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
};

const gallery = await httpGet('http://localhost:5678/api/works', params)

export function genererGallery() {
    for (let i = 0; i < gallery.length; i++) {
        generateGalleryItem(gallery[i]);
    }
}

