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
    if (artist.trim() == "") {
        console.log("Artist is false");
        isValidData = false;
        artistTextBox.nextElementSibling.textContent = "Must input an artist's name";
    }
    let song = songTextBox.value;
    if (song.trim() == "") {
        console.log("Song is false");
        isValidData = false;
        songTextBox.nextElementSibling.textContent = "Must input a song name";
    }
    console.log("Code continues from song");
    let album = albumTextBox.value;
    if (album.trim() == "") {
        console.log("Album is false");
        isValidData = false;
        albumTextBox.nextElementSibling.textContent = "Must input an album name";
    }
    let length = parseFloat(lengthTextBox.value);
    if (length <= 0 || isNaN(length) || length > 600) {
        console.log("Length is false");
        isValidData = false;
        lengthTextBox.nextElementSibling.textContent = "Length must be a realistic number";
    }
    let releaseDate = releaseDateTextBox.value;
    let releaseDateCheck = Date.parse(releaseDate);
    if (isNaN(releaseDateCheck)) {
        console.log("Date is false");
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Must input a date";
    }
    if (isValidData) {
        let newSong = new Song();
        return newSong;
    }
}
function addSong(b) {
}
