async function mediaFactory () {
    const response = await fetch('data/photographers.json');
    if (!response.ok) {
        alert("Erreur");
        return;
    } 
    const { media } = await response.json();

    const images = media.filter(media => media.image);
    const videos = media.filter(media => media.video);

    return { images, videos }; 
}
mediaFactory();



