/**
 * function d'ouverture de lightbox
 */
function lightboxOpener() {
    const lightbox = document.querySelector('dialog.light-box');
    lightbox.style.display = 'flex';
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
async function initMediaGallery() {
    await mediaGalleryByID();
    openListener();
    closeListener();
}

initMediaGallery();