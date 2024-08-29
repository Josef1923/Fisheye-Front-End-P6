/**
*Sépare les media du fichier photographers.JSON
*/
class media {
    constructor(id, photographerId, title, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }
}

class image extends media {
    constructor(id, photographerId, title, image, likes, date, price) {
        super(id, photographerId, title, likes, date, price);
        this.image = image;
    }
}

class video extends media {
    constructor(id, photographerId, title, video, likes, date, price) {
        super(id, photographerId, title, likes, date, price);
        this.video = video;
    }
}

function mediaFactory(media) {

    if (media.image) {
        return new image(media.id, media.photographerId, media.title, media.image, media.likes, media.date, media.price);
    }

    if (media.video) {
        return new video(media.id, media.photographerId, media.title, media.video, media.likes, media.date, media.price);
    }

    throw new Error("type media non reconnu");
}