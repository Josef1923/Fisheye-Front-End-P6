/**
* Récupère les données du photographe JSON
*/
async function getPhotographers() {            
    const response = await fetch('data/photographers.json');
    const photographerDispo = await response.json();    
    return photographerDispo;
}

/**
 * Affiche les données des photographes sur la page.
 */
async function displayData(photographerDispo) {
    
    const photographersSection = document.querySelector(".photographer_section");

    photographerDispo.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

/**
 * Initialise l'affichage 
 */
async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();