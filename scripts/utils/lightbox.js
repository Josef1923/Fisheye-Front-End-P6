/**
 * function d'ouverture de lightbox
 */
function lightboxOpener(event) {
    const background = document.querySelector('.background-lightbox');
    const lightbox = document.querySelector('dialog.light-box');
    const clickedMedia = event.currentTarget;

    const mediaSrc = clickedMedia.getAttribute('src');
    const mediaAlt = clickedMedia.getAttribute('alt');

    const lightboxBuild = document.getElementById('buildLb');
    lightboxBuild.innerHTML = '';

    let newMediaElement;

    if (clickedMedia.tagName === 'IMG') {
        newMediaElement = document.createElement('img');
    } else if (clickedMedia.tagName === 'VIDEO') {
        newMediaElement = document.createElement('video');
        newMediaElement.setAttribute('controls', '');
    }

    newMediaElement.setAttribute('src', mediaSrc);
    newMediaElement.setAttribute('alt', mediaAlt);

    lightboxBuild.appendChild(newMediaElement);

    background.style.display = 'block';
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
    const background = document.querySelector('.background-lightbox');
    const lightbox = document.querySelector('dialog.light-box');

    lightbox.style.display = '';
    lightbox.setAttribute('aria-hidden', 'true');
    background.style.display = 'none';
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