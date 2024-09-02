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
        alert("Erreur");
        return;
    }
    const { photographers, media } = await response.json();  //destructuration objet photographer grace aux {}
    let photographer = photographers.find(photographer => photographer.id === id);

    photographer = {
        ...photographer,
        media: media.filter(medium => medium.photographerId === photographer.id).map(mediaFactory),
    };

    return photographer;
}

/**
 * *Initialisation
*/
async function init() {
    const photographerId = getPhotographerId();
    const photographer = await getPhotographerData(photographerId);
    displayPhotographerData(photographer);
    displayMediaGalleryByID(photographer);
    openListener();
    closeListener();
    slideListener();
}

init();
