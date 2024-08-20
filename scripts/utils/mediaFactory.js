class mediaFactory {
    constructor(data, type) {
        if (type === 'image') {
            return new image(data)
        } else if (type === 'video') {
            return new video(data) 
        } else {
            throw 'unknow format type'
        }
    }
}