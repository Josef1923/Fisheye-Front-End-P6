/**
 * function d'ouverture de lightbox
 */
function lightboxOpener() {
    const lightbox = document.querySelector('dialog.light-box');
    lightbox.style.display = 'block';
    lightbox.setAttribute('aria-hidden', 'false');
}

/**
 * function listener d'ouverture lightbox
 */
function openListener () {
    const opener = document.querySelectorAll('.lightboxer');

    opener.forEach(media => {
        media.addEventListener('click', lightboxOpener);
    });
} 

/**
 * Initialise lightbox 
 */
async function initMediaGallery() {
    await mediaGalleryByID();
    openListener();
}

initMediaGallery();