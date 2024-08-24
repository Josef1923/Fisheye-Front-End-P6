// Affiche les données du photographe
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
}


async function mediaGalleryByID() {
    const photographerID = getPhotographerId(); // Récupère l'ID du photographe à partir de l'URL
    const photographer = await getPhotographerData(photographerID); // Récupère les données du photographe
    const { images, videos } = await mediaFactory(); // Appelle mediaFactory pour récupérer les médias

    
    // Filtrer les médias en fonction du photographerID
    const  filteredImages = images.filter(media => media.photographerId === photographerID);
    const filteredVideos = videos.filter(media => media.photographerId === photographerID);
    
    const mediaGallery = document.querySelector('.media-gallery');
    mediaGallery.innerHTML = ""; 
    const mediaPath = `assets/images/${photographer.name}/`;

    // Ajouter les images filtrées
    filteredImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', `${mediaPath}${image.image}`);
        imgElement.setAttribute('alt', image.title);
        mediaGallery.appendChild(imgElement);
    });

    // Ajouter les vidéos filtrées
    filteredVideos.forEach(video => {
        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', 'controls');
        const sourceElement = document.createElement('source');
        sourceElement.setAttribute('src', `${mediaPath}${video.video}`);
        sourceElement.setAttribute('type', 'video/mp4');
        videoElement.appendChild(sourceElement);
        mediaGallery.appendChild(videoElement);
    });
   
}

// Appel de la fonction pour afficher les médias
mediaGalleryByID();