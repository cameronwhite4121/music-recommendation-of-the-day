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
    return null;
}

/**
 * Adds a song object to web storage. Assumes
 * all data is valid.
 * @param b The song to be added
 */
function addSong(b:Song):void {
    
}