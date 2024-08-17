// Affiche les données du photographe
function displayPhotographerData(photographer) {
    
    const h1 = document.querySelector('.photograph-header h1');
    const location = document.querySelector('.photographer-location');
    const tagline = document.querySelector('.photographer-tagline');
    const img = document.querySelector('.photographer-img');

    
    h1.textContent = photographer.name;
    location.textContent = `${photographer.city}, ${photographer.country}`;
    tagline.textContent = photographer.tagline;
    img.setAttribute('src', `assets/photographers/${photographer.portrait}`);
    img.setAttribute('alt', photographer.name);
}

