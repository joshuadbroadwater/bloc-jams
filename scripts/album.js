
var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumOutsiders = {
    title: 'The Outsiders',
    artist: 'Eric Church',
    label: 'EMI',
    year: '2014',
    albumArtUrl: 'http://http://americansongwriter.com/wp-content/uploads/2014/02/91Kg0HwJHqL._SL1500_.jpg?a37af8',
    songs: [
        {title: 'The Outsiders', duration: '4:10'},
        {title: 'A man who was gonna die young', duration: '3:13'},
        {title: 'Cold One', duration: '3:25'},
        {title: 'Roller coaster ride', duration: '4:36'},
        {title: 'Talledega', duration: '4:22'},
        {title: 'Broke Record', duration: '3:29'},
        {title: 'Like a wrecking ball', duration: '3:18'}
    ]
};

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };
    
var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>'

 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
     songListContainer.addEventListener('mouseover', function(event) {
         //#1
        // Only target individual song rows during event delegation
         if (event.target.parentElement.className === 'album-view-song-item') {
            event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         }
     });
 
    for (var i = 0; i < songRows.length; i++) {
        songRows[i].addEventListener('mouseleave', function(event) {
            
           this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
         });
    }
 
     var albumNames = [albumPicasso, albumMarconi, albumOutsiders];
     var index = 0
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     albumImage.addEventListener("click", function(event) { 
      setCurrentAlbum(albumNames[index]);
      index ++;
      
      if (index == albumNames.length) {
          index = 0; 
        }
     });
};
                              
    
        
    

   

        
