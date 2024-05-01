class Song {
}
let mySong = new Song();
mySong.name = "Aggressive Evolution";
mySong.album = "I let it in and it took everything";
mySong.length = 207;
mySong.artist = "Loathe";
mySong.releaseDate = new Date(2020, 1, 7);
console.log(mySong);
window.onload = function () {
    let addSongButton = document.querySelector("#add-song");
    addSongButton.onclick = processSong;
};
function processSong() {
    console.log("Process Song was called");
    let userSong = getSong();
    if (userSong != null) {
        addSong(userSong);
    }
}
function getSong() {
    let artistTextBox = document.querySelector("#artist");
    let songTextBox = document.querySelector("#song");
    let albumTextBox = document.querySelector("#album");
    let lengthTextBox = document.querySelector("#length");
    let releaseDateTextBox = document.querySelector("#releaseDate");
    let isValidData = true;
    let artist = artistTextBox.value;
    let song = songTextBox.value;
    if (song.trim() == "") {
        isValidData = false;
        songTextBox.nextElementSibling.textContent = "Must input a song name";
    }
    let album = albumTextBox.value;
    let length = parseFloat(lengthTextBox.value);
    let releaseDate = new Date(releaseDateTextBox.value);
    return is;
    isValidData;
}
function addSong(b) {
}
