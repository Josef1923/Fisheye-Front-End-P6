/**
*Sépare les media du fichier photographers.JSON
*/
class Media {
    constructor(id, photographerId, title, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }
}

class Image extends Media {
    constructor(id, photographerId, title, image, likes, date, price) {
        super(id, photographerId, title, likes, date, price);
        this.image = image;
    }
}

class Video extends Media {
    constructor(id, photographerId, title, video, likes, date, price) {
        super(id, photographerId, title, likes, date, price);
        this.video = video;
    }
}

function mediaFactory(media) {

    if (media.image) {
        return new Image(media.id, media.photographerId, media.title, media.image, media.likes, media.date, media.price);
    }

    if (media.video) {
        return new Video(media.id, media.photographerId, media.title, media.video, media.likes, media.date, media.price);
    }

    throw new Error("type media non reconnu");
}