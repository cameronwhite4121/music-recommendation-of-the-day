class Song {
}
window.onload = function () {
    let addSongButton = document.querySelector("#add-song");
    addSongButton.onclick = processSong;
};
function processSong() {
    console.log("Process Song was called");
    let userSong = getSong();
    if (userSong != null) {
        addSong(userSong);
        console.log("Song: " + userSong);
    }
}
function getSong() {
    clearAllErrorMsgs();
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
    let songName = songTextBox.value;
    if (songName.trim() == "") {
        console.log("Song is false");
        isValidData = false;
        songTextBox.nextElementSibling.textContent = "Must input a song name";
    }
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
        console.log("Returned song");
        let userSong = new Song();
        userSong.artist = artist;
        userSong.songName = songName;
        userSong.album = album;
        userSong.length = length;
        userSong.releaseDate = new Date(releaseDate);
        return userSong;
    }
    return null;
}
function addSong(b) {
    console.log("Song was added to metaphorical storage that's housed in imagination land that's definitely real and not made up, trust me bro.");
}
function clearAllErrorMsgs() {
    let allSpans = document.querySelectorAll("form span.error-msg");
    for (let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}
