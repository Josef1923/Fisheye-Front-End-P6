async function getPhotographers() {            
    const response = await fetch('data/photographers.json');
    const photographerDispo = await response.json();
    
    return photographerDispo;
}

async function displayData(photographerDispo) {
    const photographersSection = document.querySelector(".photographer_section");

    photographerDispo.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
    