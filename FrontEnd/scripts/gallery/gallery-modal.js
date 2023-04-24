// Récupération de la galerie depuis le fichier JSON

const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
};

const gallery = await httpGet('http://localhost:5678/api/works', params)

const token = localStorage.getItem('token')

/**
 * generation initial de la gallery de la modal
 */
for (let i = 0; i < gallery.length; i++) {
    generateModalGalleryItem(gallery[i]);
}


/**
 * function de supression des images de la modal
 * @param id l'id de l'image à supprimer
 */
async function removeElement(id) {
    await removeItemInGallery(id);
}


