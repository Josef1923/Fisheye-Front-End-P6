/**
* Récupère l'ID du photographe depuis l'URL
*/
function getPhotographerId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

/**
* Récupère les données du photographe par son ID
*/
async function getPhotographerData(id) {
    const response = await fetch('data/photographers.json');

    if (!response.ok) {
        return alert("Erreur");
    }

    const { photographers, media } = await response.json();  //destructuration objet photographer grace aux {}
    let photographer = photographers.find(photographer => photographer.id === id);

    photographer = {
        ...photographer,
        media: media.filter(medium => medium.photographerId === photographer.id).map(Media.create),
    };

    return photographer;
}

/**
 * *Initialisation
*/
async function init() {
    const photographerId = getPhotographerId();
    const photographer = await getPhotographerData(photographerId);
    const photographerPage = photographerPageTemplate(photographer);
    photographerPage.displayPhotographerData();
    photographerPage.displayMediaGallery()

    // Ajouter un écouteur d'événement pour la sélection de tri pour rafraîchir la galerie quand le tri change
    const sortZone = document.getElementById('choice');
    if (sortZone) {
        sortZone.addEventListener('change', () => {
            photographerPage.displayMediaGallery();
        });
    }

    lightboxInit();
}
init()
