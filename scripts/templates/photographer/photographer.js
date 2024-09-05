/**
 * Gère l'affichage des données du photographe sur photographer.html
 */
function photographerPageTemplate(photographer) {
    const { name, city, country, tagline, portrait, media } = photographer;
    const picture = `assets/photographers/${portrait}`;

    /**
    * Affiche les données photographes photographer.html
    */

    function displayPhotographerData() {

        const h1 = document.querySelector('.photograph-header h1');
        h1.textContent = name;

        const location = document.querySelector('.photographer-location');
        location.textContent = `${city}, ${country}`;

        const tag = document.querySelector('.photographer-tagline');
        tag.textContent = tagline;

        const img = document.querySelector('.photographer-img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', name);

        const photographerNameModal = document.querySelector('#contact_modal p');
        photographerNameModal.textContent = name;
    };

    /**
    * function mediaGalleryByID affiche la gallerie de media main
    */
    async function displayMediaGallery() {

        // Filtre médium en fonction du photographerID
        const mediaGallery = document.querySelector('.media-gallery');
        mediaGallery.innerHTML = ''; // Vide le conteneur avant d'ajouter de nouveaux éléments (affichage doublons sinon)
        const mediaPath = `assets/images/${name}/`;

        // Ajout images filtrées
        media.forEach(media => {
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
    // Retourne les méthodes publiques pour manipuler les données du photographe
    return {
        displayPhotographerData,
        displayMediaGallery
    };
}