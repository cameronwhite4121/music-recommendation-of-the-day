/**
 * Represents a single song
 */
class Song {
    /**
     * What is the song called
     */
    name: string;
    /**
     * Album song is on
     */
    album: string; 
    /**
     * For now, number of seconds
     */
    length: number;
    /**
     * Who released the song?
     */
    artist: string;
    /**
     * yyyy/mm/dd
     */
    releaseDate: Date; 
}

// Song object test code
let mySong = new Song();
mySong.name = "Aggressive Evolution";
mySong.album = "I let it in and it took everything";
mySong.length = 207;
mySong.artist = "Loathe";
mySong.releaseDate = new Date(2020, 1, 7);

console.log(mySong);

window.onload = function() {
    // Set up button click event for add song form
    let addSongButton = document.querySelector("#add-song") as HTMLButtonElement;
    addSongButton.onclick = processSong;
}

function processSong() {
    console.log("Process Song was called");

    let userSong = getSong();
    if(userSong != null) {
        addSong(userSong);
    }
}

/**
 * Retrieves all song data from html page.
 * If all data is valid, a song object will
 * be returned. Null if any data is invalid.
 * @returns 
 */
function getSong():Song {
    // get all inputs
    let artistTextBox = document.querySelector("#artist") as HTMLInputElement; // Casting here helps with intellisense
    let songTextBox = document.querySelector("#song") as HTMLInputElement;
    let albumTextBox = document.querySelector("#album") as HTMLInputElement;
    let lengthTextBox = document.querySelector("#length") as HTMLInputElement;
    let releaseDateTextBox = document.querySelector("#releaseDate") as HTMLInputElement;

    // Validate data
    let isValidData:boolean = true;

    let artist:string = artistTextBox.value;

    let song:string = songTextBox.value;
    if(song.trim() == "") {
        isValidData = false;
        songTextBox.nextElementSibling.textContent = "Must input a song name";
    }

    let album:string = albumTextBox.value;

    let length:number = parseFloat(lengthTextBox.value);

    let releaseDate:Date = new Date(releaseDateTextBox.value);

    return is isValidData
}

/**
 * Adds a song object to web storage. Assumes
 * all data is valid.
 * @param b The song to be added
 */
function addSong(b:Song):void {
    
}

