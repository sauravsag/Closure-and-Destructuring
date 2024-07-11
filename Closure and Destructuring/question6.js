// Task 1: Create a function createPlaylist
function createPlaylist(playlistName) {
    let songs = [];

    return {
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },
        listSongs: function() {
            return songs;
        },
        getPlaylistName: function() {
            return playlistName;
        }
    };
}
// Task 2: Create a function addSong
function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}
// Task 3: Create a function listSongs
function listSongs(playlist) {
    return playlist.listSongs();
}

const myPlaylist = createPlaylist('My Playlist');
addSong(myPlaylist, 'Song 1', 'Artist 1');
addSong(myPlaylist, 'Song 2', 'Artist 2');
addSong(myPlaylist, 'Song 3', 'Artist 3');

console.log('Playlist Name:', myPlaylist.getPlaylistName());
console.log('Songs in Playlist:', listSongs(myPlaylist));
