/**
 * Gère l'affichage des données du photographe sur photographer.html
 */
function photographerPageTemplate(photographer) {
    const { name, city, country, tagline, portrait, media } = photographer;
    const picture = `assets/photographers/${portrait}`;

    //compteur de like
    let totalLikes = media.reduce((total, item) => total + item.likes, 0);

    /**
    * Affiche les données photographes photographer.html
    */

    function displayPhotographerData() {
        // Sélectionne le conteneur où le contenu sera injecté
        const photographHeader = document.querySelector('.photograph-header');

        // Crée l'élément div photographer-info
        const photographerInfoDiv = document.createElement('div');
        photographerInfoDiv.classList.add('photographer-info');

        // Crée et ajoute l'élément h1
        const h1 = document.createElement('h1');
        h1.textContent = name;
        photographerInfoDiv.appendChild(h1);

        // Crée et ajoute l'élément p pour la location
        const locationP = document.createElement('p');
        locationP.classList.add('photographer-location');
        locationP.textContent = `${city}, ${country}`;
        photographerInfoDiv.appendChild(locationP);

        // Crée et ajoute l'élément p pour la tagline
        const taglineP = document.createElement('p');
        taglineP.classList.add('photographer-tagline');
        taglineP.textContent = tagline;
        photographerInfoDiv.appendChild(taglineP);

        // Ajoute photographer-info dans le conteneur .photograph-header
        photographHeader.insertBefore(photographerInfoDiv, photographHeader.firstChild);

        // Crée et ajoute l'image du photographe
        const photographerImg = document.createElement('img');
        photographerImg.classList.add('photographer-img');
        photographerImg.setAttribute('src', picture);
        photographerImg.setAttribute('alt', name);
        photographHeader.appendChild(photographerImg);

        // Met à jour le nom du photographe dans le modal de contact
        const photographerNameModal = document.querySelector('#contact_modal p');
        photographerNameModal.textContent = name;

        //Affichage total de likes initial
        const totalLikesBox = document.querySelector('.total-likes');
        totalLikesBox.textContent = totalLikes;

        // Met à jour le prix journalier
        const dailyPrice = document.querySelector('.daily-price');
        dailyPrice.textContent = `${photographer.price} € / jour`;
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

            if (media instanceof Image) {
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

            //Function listeneur ajout de like + compteur de likes
            likeIcon.addEventListener('click', () => {
                let counter = parseInt(likeCount.textContent);
                counter += 1;
                likeCount.textContent = counter;
                likeIcon.classList.add('disabled');
                totalLikes += 1;
                document.querySelector('.total-likes').textContent = totalLikes;
            });

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