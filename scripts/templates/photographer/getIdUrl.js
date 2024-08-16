function getIdFromUrl () {
    const urlId = new URLSearchParams(window.location.search);
    return urlId.get('id');
}

const PhotographeId = getIdFromUrl();

console.log(PhotographeId)