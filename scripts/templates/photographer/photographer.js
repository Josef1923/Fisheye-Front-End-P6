/**
*Affiche les données photographes dans photographer.html
*/

/**
* function displayPhotographerData affiche les données dans main header
*/

function displayPhotographerData(photographer) {
    
    const h1 = document.querySelector('.photograph-header h1');
    const location = document.querySelector('.photographer-location');
    const tagline = document.querySelector('.photographer-tagline');
    const img = document.querySelector('.photographer-img');
    const photographerNameModal = document.querySelector('#contact_modal p');
    
    h1.textContent = photographer.name;
    location.textContent = `${photographer.city}, ${photographer.country}`;
    tagline.textContent = photographer.tagline;
    img.setAttribute('src', `assets/photographers/${photographer.portrait}`);
    img.setAttribute('alt', photographer.name);
    photographerNameModal.textContent = photographer.name;
};

/**
* function mediaGalleryByID affiche la gallerie de media main
*/

async function mediaGalleryByID() {
    const photographerID = getPhotographerId(); // Récupère l'ID du photographe à partir de l'URL
    const photographer = await getPhotographerData(photographerID); // Récupère les données du photographe
    const { images, videos } = await mediaFactory(); // Appelle mediaFactory pour récupérer les médias
    
    // Filtre médias en fonction du photographerID
    const  filteredImages = images.filter(media => media.photographerId === photographerID);
    const filteredVideos = videos.filter(media => media.photographerId === photographerID);
    
    const mediaGallery = document.querySelector('.media-gallery');    
    mediaGallery.innerHTML = ''; // Vide le conteneur avant d'ajouter de nouveaux éléments (affichage doublons sinon)
    const mediaPath = `assets/images/${photographer.name}/`;

    // Ajout images filtrées
    filteredImages.forEach(image => {
        //création de conteneur
        const conteneur = document.createElement('div');        
        //création img avec alt
        const mediaImg = document.createElement('img');
        mediaImg.setAttribute('src', `${mediaPath}${image.image}`);
        mediaImg.setAttribute('alt', image.title);
        mediaImg.classList.add('lightboxer');
        conteneur.appendChild(mediaImg);
        //création titre p
        const imgTitle = document.createElement('p');
        imgTitle.textContent = image.title;
        conteneur.appendChild(imgTitle);
        //attache au conteneur principal     
        mediaGallery.appendChild(conteneur);
    });

    // Ajout vidéos filtrées
    filteredVideos.forEach(video => {
        //création de conteneur
        const conteneur = document.createElement('div');        
        //creation video avec alt
        const mediaVideo = document.createElement('video');
        mediaVideo.setAttribute('controls', '');
        mediaVideo.setAttribute('src', `${mediaPath}${video.video}`);
        mediaVideo.setAttribute('alt', video.title);
        mediaVideo.classList.add('lightboxer');
        conteneur.appendChild(mediaVideo);
        //creation titre p
        const videoTitle = document.createElement('p');
        videoTitle.textContent = video.title;
        conteneur.appendChild(videoTitle);
        //attache conteneur principal
        mediaGallery.appendChild(conteneur);        
    });
}
mediaGalleryByID();