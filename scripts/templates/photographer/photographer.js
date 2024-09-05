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

    // Filtre médium en fonction du photographerID
    const mediaGallery = document.querySelector('.media-gallery');
    mediaGallery.innerHTML = ''; // Vide le conteneur avant d'ajouter de nouveaux éléments (affichage doublons sinon)
    const mediaPath = `assets/images/${photographer.name}/`;

    // Ajout images filtrées
    photographer.media.forEach(media => {
        //création de conteneur
        const container = document.createElement('div');
        container.classList.add('media-container');

        if (media instanceof image) {
            //création img avec alt
            mediaElement = document.createElement('img');
            mediaElement.setAttribute('src', `${mediaPath}${media.image}`);
            mediaElement.setAttribute('alt', media.title);
            mediaElement.setAttribute('data-media-id', media.id);
            mediaElement.classList.add('lightboxer');
        } else {
            //creation video avec alt
            mediaElement = document.createElement('video');
            mediaElement.setAttribute('controls', '');
            mediaElement.setAttribute('src', `${mediaPath}${media.video}`);
            mediaElement.setAttribute('alt', media.title);
            mediaElement.setAttribute('data-media-id', media.id);
            mediaElement.classList.add('lightboxer');
        }

        container.appendChild(mediaElement);

        // Création du conteneur pour les titre & likes
        const titleAndLikesContainer = document.createElement('div');
        titleAndLikesContainer.classList.add('title-likes-container');

        // Titre
        const imgTitle = document.createElement('p');
        imgTitle.textContent = media.title;
        imgTitle.classList.add('media-title');
        titleAndLikesContainer.appendChild(imgTitle);

        // Conteneur likes
        const likesContainer = document.createElement('div');
        likesContainer.classList.add('likes-container');

        // Compteur
        const likeCount = document.createElement('span');
        likeCount.textContent = media.likes;
        likeCount.classList.add('like-count');
        likesContainer.appendChild(likeCount);

        // Icone like svg
        const likeIcon = document.createElement('img');
        likeIcon.setAttribute('src', 'assets/icons/like.svg');
        likeIcon.setAttribute('alt', 'like icon');
        likeIcon.classList.add('like-icon');
        likesContainer.appendChild(likeIcon);

        // Ajout du conteneur de likes au conteneur principal
        titleAndLikesContainer.appendChild(likesContainer);

        // Ajout du conteneur du titre et des likes sous l'image
        container.appendChild(titleAndLikesContainer);

        // Ajout du conteneur complet à la galerie de médium
        mediaGallery.appendChild(container);
    });
}