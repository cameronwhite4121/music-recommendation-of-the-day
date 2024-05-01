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