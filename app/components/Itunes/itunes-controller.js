import ItunesService from "./itunes-service.js";
//Private
const _is = new ItunesService()

function drawSongs() {
  let template = '';

  _is.Songs.forEach(song => {
    template += song.Template;
  });

  document.getElementById('songs').innerHTML = template;
  console.log(template);



  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(_is.Songs)

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
}


export default ItunesController