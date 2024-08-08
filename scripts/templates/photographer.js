function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;
        location.classList.add('photographer-location');

        const description = document.createElement( 'p' );
        description.textContent = tagline;
        description.classList.add('photographer-description');

        const prix = document.createElement('p');
        prix.textContent = `${price} €/jour`;
        prix.classList.add('photographer-prix');


        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(prix)
  

       
        return (article);
   
    }
    return { name, picture, getUserCardDOM }
}