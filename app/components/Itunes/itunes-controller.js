import ItunesService from "./itunes-service.js";
//Private
const _is = new ItunesService()



function drawSongs() {
  let template = '';

  _is.Songs.forEach(song => {
    template += song.Template;
  });

  document.getElementById('songs').innerHTML = template;

  let artist = _is.Songs[0].artist;

  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  document.querySelector('#info').innerHTML = `<p class="txt-color">Results for the artist: ${artist}. CLICK SONG TITLE TO PREVIEW.</p>`

}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    _is.addSubscriber('songs', drawSongs);
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    _is.getMusicByArtist(artist)
  }
  playSong(url) {
    document.querySelector('#music-controls').innerHTML = `
  <audio style="width: 250px; max-width: 250px; min-width: 150px;margin-top: 7px; margin-bottom: 7px;" class="bg-color4" controls>
    <source src="${url}" type="audio/mpeg">
      Your browser does not support the audio element.
                </audio>
            </div >
              `
  }
}


export default ItunesController