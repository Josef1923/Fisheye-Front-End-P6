/**
*Stocker les médium dans la lightbox
*/
let currentMediaIndex = 0;
let mediaList = [];

/**
 *Fonction d'ouverture de lightbox avec index des médium
 */
function lightboxOpener(event) {
    const background = document.querySelector('.background-lightbox');
    const lightbox = document.querySelector('dialog.light-box');
    const clickedMedia = event.currentTarget;

    // Mise à jour de la liste des médium et de l'index
    mediaList = Array.from(document.querySelectorAll('.lightboxer'));
    currentMediaIndex = mediaList.findIndex(media => media === clickedMedia);

    buildLightbox(currentMediaIndex);

    background.style.display = 'block';
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
}

/**
 *Fonction pour construire la lightbox
 */
function buildLightbox(index) {
    const lightboxBuild = document.getElementById('buildLb');
    lightboxBuild.innerHTML = '';

    const media = mediaList[index];
    const mediaSrc = media.getAttribute('src');
    const mediaAlt = media.getAttribute('alt');

    let newMediaElement;

    if (media.tagName === 'IMG') {
        newMediaElement = document.createElement('img');
    } else if (media.tagName === 'VIDEO') {
        newMediaElement = document.createElement('video');
        newMediaElement.setAttribute('controls', '');
    }

    newMediaElement.setAttribute('src', mediaSrc);
    newMediaElement.setAttribute('alt', mediaAlt);

    lightboxBuild.appendChild(newMediaElement);
}

/**
 *Fonction pour slider à gauche ou à droite
 */
function slideMedia(direction) {
    if (direction === 'left') {
        currentMediaIndex = (currentMediaIndex === 0) ? mediaList.length - 1 : currentMediaIndex - 1;
    } else if (direction === 'right') {
        currentMediaIndex = (currentMediaIndex === mediaList.length - 1) ? 0 : currentMediaIndex + 1;
    }
    buildLightbox(currentMediaIndex);
}

/**
 *listeners pour les boutons de slide
 */
function slideListener() {
    const leftSlide = document.getElementById('left-slide');
    const rightSlide = document.getElementById('right-slide');

    leftSlide.addEventListener('click', () => slideMedia('left'));
    rightSlide.addEventListener('click', () => slideMedia('right'));
}

/**
 *listener d'ouverture lightbox
 */
function openListener() {
    const opener = document.querySelectorAll('.lightboxer');

    opener.forEach(media => {
        media.addEventListener('click', lightboxOpener);
    });
}

/**
 *Fonction de fermeture de la lightbox
*/
function lightboxCloser() {
    const background = document.querySelector('.background-lightbox');
    const lightbox = document.querySelector('dialog.light-box');

    lightbox.style.display = '';
    lightbox.setAttribute('aria-hidden', 'true');
    background.style.display = 'none';
}

/**
 *listener de fermeture lightbox
*/
function closeListener() {
    const closer = document.getElementById('close-slide');

    closer.addEventListener('click', lightboxCloser);
}

function lightboxInit() {
    openListener();
    slideListener();
    closeListener();
}
