async function mediaFactory (photographerId) {
    const response = await fetch('data/photographers.json');
    if (!response.ok) {
        alert("Erreur");
        return;
    } 
    const { media } = await response.json();

   

    const images = media.filter(media => media.image);
    const videos = media.filter(media => media.video);

    console.log(images);
    console.log(videos);
}
mediaFactory();