/**
 * Represents a single song
 */
class Song {
        /**
     * Who released the song?
     */
    artist: string;
    /**
     * What is the song called
     */
    songName: string;
    /**
     * Album song is on
     */
    album: string; 
    /**
     * For now, number of seconds
     */
    length: number;
    /**
     * yyyy/mm/dd
     */
    releaseDate: Date; 
}

window.onload = function() {
    // Set up button click event for add song form
    let addSongButton = document.querySelector("#add-song") as HTMLButtonElement;
    addSongButton.onclick = processSong;

}

/**
 * Think of this as main. All main functions are called here and song data is returned.
 */
function processSong() {
    console.log("Process Song was called");

    let userSong = getSong();
    if(userSong != null) {
        addSong(userSong);
        console.log("Song: " + userSong); // Need to create a toString method buuuuuut I don't have time to do extra stuff rn. Make an issue? nah
    }
}

/**
 * Retrieves all song data from html page.
 * If all data is valid, a song object will
 * be returned. Null if any data is invalid.
 * @returns 
 */
function getSong():Song {
    clearAllErrorMsgs();

    // get all inputs
    let artistTextBox = document.querySelector("#artist") as HTMLInputElement; // Casting here helps with intellisense
    let songTextBox = document.querySelector("#song") as HTMLInputElement;
    let albumTextBox = document.querySelector("#album") as HTMLInputElement;
    let lengthTextBox = document.querySelector("#length") as HTMLInputElement;
    let releaseDateTextBox = document.querySelector("#releaseDate") as HTMLInputElement;

    // Validate data  
    let isValidData:boolean = true;

    // Validate artist name
    let artist:string = artistTextBox.value;
    if(artist.trim() == "") {
        console.log("Artist is false");
        isValidData = false;
        artistTextBox.nextElementSibling.textContent = "Must input an artist's name";
    }

    // Validate song name
    let songName:string = songTextBox.value;
    if(songName.trim() == "") {
        console.log("Song is false");
        isValidData = false;
        songTextBox.nextElementSibling.textContent = "Must input a song name";
    }

    // Validate album name
    let album:string = albumTextBox.value;
    if(album.trim() == "") {
        console.log("Album is false");
        isValidData = false;
        albumTextBox.nextElementSibling.textContent = "Must input an album name";
    }

    // Validate song length
    let length:number = parseFloat(lengthTextBox.value);
    if(length <= 0 || isNaN(length) || length > 600) {
        console.log("Length is false");
        isValidData = false;
        lengthTextBox.nextElementSibling.textContent = "Length must be a realistic number";
    }

    // Validate date
    let releaseDate = releaseDateTextBox.value;
    let releaseDateCheck = Date.parse(releaseDate);
    if(isNaN(releaseDateCheck)) {
        console.log("Date is false");
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Must input a date";
    }

    // Creates song if data is valid
    if (isValidData) {
        console.log("Returned song");
        let userSong = new Song();
        userSong.artist = artist;
        userSong.songName = songName;
        userSong.album = album;
        userSong.length = length;

        // Fixes bug of date being off by 1 day due to timezone offsets.
        // Splits date into an array with each index seperated by a "-"
        // Array would be {"year", "month", "day"}
        const dateParts:string[] = releaseDate.split("-");
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1; // subtract 1 due to months being index based
        const day = parseInt(dateParts[2]);
        const correctDate = new Date(year, month, day);

        userSong.releaseDate = correctDate;
        return userSong;
    }
    return null; // If there is any invalid data
}

/**
 * Adds a song object to web storage. Assumes
 * all data is valid. This function DEFINITELY
 * has a purpose. 
 * @param s The song to be added
 */
function addSong(s:Song):void {
    console.log("Song was added to metaphorical storage that's housed in imagination land that's definitely real and not made up, trust me bro.");
    console.log(s);  

    // Constructs song display div structure 
    let songDiv = document.createElement("div");
    /**
     * Very happy with this code. I had a bug that was making 
     * my cotainer styles visible even without content. My code 
     * now uses dom manipulation to make a div with an id tag! 
     * Now the styles are only visible when the div is created. 
     */
    songDiv.setAttribute("id", "songDiv"); 
    let songHeading = document.createElement("h2");
    let songParahraph = document.createElement("p");

    // Adds Artist name to h2 element
    songHeading.innerHTML = s.artist  + "<br>" + "<hr>"; 
    // Adds song paragraph to p element
    songParahraph.innerHTML = s.songName + " is featured in the album " + s.album + 
                                " by " + s.artist + " and was released in " + s.releaseDate + 
                                ". The song is " + s.length + " minute/s in length.";
    songDiv.appendChild(songHeading);
    songDiv.appendChild(songParahraph);

    // Display song div to webpage
    document.querySelector("#song-display").appendChild(songDiv); 
}


/**
 * Clears all span messages every time getSong() is called
 */
function clearAllErrorMsgs() {
    let allSpans = document.querySelectorAll("form span.error-msg");
    for(let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}

