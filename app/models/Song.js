export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "150x150")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.albumPrice = song.collectionPrice
        this.price = song.trackPrice
        this.preview = song.previewUrl
        this.kind = song.kind
    }
    get Template() {
        return `
            <div class=" bg-color1 col-md-3 col-xs-12 card my-3" style="width: 20rem; border: 3 solid red;">
            <img src="${this.albumArt}" class="card-img-top" alt="Album Art">
            <div class="bg-color1 card-body">
                <h6 onclick="app.controllers.itunesCtrl.playSong('${this.preview}')" class="card-title">Title: ${this.title}</h6>
                <p class="card-text mute-text">Price: $${this.price}</p>
            </div>
            <ul class=" list-group list-group-flush">
            <li class="bg-color1 list-group-item">Artist: ${this.artist}</li>
            <li class="bg-color1 list-group-item">Album: ${this.collection} -- $${this.albumPrice}</li>
            </ul>
            </div>
             `

    }
}