async function getPhotographers() {            
    const response = await fetch('data/photographers.json');
    const photographerDispo = await response.json();
    
    return photographerDispo;
}