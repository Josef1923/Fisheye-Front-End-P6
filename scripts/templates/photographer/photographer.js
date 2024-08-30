/**
*Affiche les données photographes dans photographer.html
*/

/**
* function displayPhotographerData affiche les données dans main header
*/

function displayPhotographerData(photographer) {

    const h1 = document.querySelector('.photograph-header h1');
    h1.textContent = photographer.name;

    const location = document.querySelector('.photographer-location');
    location.textContent = `${photographer.city}, ${photographer.country}`;

    const tagline = document.querySelector('.photographer-tagline');
    tagline.textContent = photographer.tagline;

    const img = document.querySelector('.photographer-img');
    img.setAttribute('src', `assets/photographers/${photographer.portrait}`);
    img.setAttribute('alt', photographer.name);

    const photographerNameModal = document.querySelector('#contact_modal p');
    photographerNameModal.textContent = photographer.name;
};

/**
* function mediaGalleryByID affiche la gallerie de media main
*/

async function displayMediaGalleryByID(photographer) {

    // Filtre médias en fonction du photographerID
    const mediaGallery = document.querySelector('.media-gallery');
    mediaGallery.innerHTML = ''; // Vide le conteneur avant d'ajouter de nouveaux éléments (affichage doublons sinon)
    const mediaPath = `assets/images/${photographer.name}/`;

    // Ajout images filtrées
    photographer.media.forEach(media => {
        //création de conteneur
        const conteneur = document.createElement('div');

        if (media instanceof image) {
            //création img avec alt
            const mediaImg = document.createElement('img');
            mediaImg.setAttribute('src', `${mediaPath}${media.image}`);
            mediaImg.setAttribute('alt', media.title);
            mediaImg.classList.add('lightboxer');
            conteneur.appendChild(mediaImg);
        } else {
            //creation video avec alt
            const mediaVideo = document.createElement('video');
            mediaVideo.setAttribute('controls', '');
            mediaVideo.setAttribute('src', `${mediaPath}${media.video}`);
            mediaVideo.setAttribute('alt', media.title);
            mediaVideo.classList.add('lightboxer');
            conteneur.appendChild(mediaVideo);
        }

        //creation titre p
        const imgTitle = document.createElement('p');
        imgTitle.textContent = media.title;
        conteneur.appendChild(imgTitle);
        //attache conteneur principal
        mediaGallery.appendChild(conteneur);
    });
}