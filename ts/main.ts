/**
 * Represents a single song
 */
class Song {
    name: string;
    album: string;
    length: number;
    artist: string;
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