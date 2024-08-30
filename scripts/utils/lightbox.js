/**
 * function d'ouverture de lightbox
 */
function lightboxOpener(event) {
    const lightbox = document.querySelector('dialog.light-box');
    const clickedMedia = event.currentTarget;

    const mediaSrc = clickedMedia.getAttribute('src');
    const mediaAlt = clickedMedia.getAttribute('alt');

    const lightboxMedia = document.getElementById('buildLb');
    lightboxMedia.setAttribute('src', mediaSrc);
    lightboxMedia.setAttribute('alt', mediaAlt);

    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
}

/**
 * function listener d'ouverture lightbox
 */
function openListener() {
    const opener = document.querySelectorAll('.lightboxer');

    opener.forEach(media => {
        media.addEventListener('click', lightboxOpener);
    });
}


/**
 * function de fermeture lightbox
 */
function lightboxCloser() {
    const lightbox = document.querySelector('dialog.light-box');

    lightbox.style.display = '';
    lightbox.setAttribute('aria-hidden', 'true');
}

/**
 * fonction de listener de fermeture lightbox
 */
function closeListener() {
    const closer = document.getElementById('close-slide');

    closer.addEventListener('click', lightboxCloser);
}

/**
 * Initialise lightbox 
 */
async function initLightbox() {
    openListener();
    closeListener();
}