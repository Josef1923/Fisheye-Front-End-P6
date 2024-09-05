/**
*Affiche les données photographes index.html
*/
function photographerTemplate(data) {
    const { id, name, portrait, city, country, tagline, price, } = data;
    const picture = `assets/photographers/${portrait}`;

    function getPhotographerInfo() {
        const article = document.createElement('article');

        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${id}`);

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name}`);

        link.appendChild(img);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.classList.add('photographer-location');

        const description = document.createElement('p');
        description.textContent = tagline;
        description.classList.add('photographer-description');

        const prices = document.createElement('p');
        prices.textContent = `${price} €/jour`;
        prices.classList.add('photographer-prices');

        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(prices);

        return article;
    }
    return { getPhotographerInfo }
}