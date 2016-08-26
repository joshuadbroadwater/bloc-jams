
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
 
     var $row = $(template);
     var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');
           if (songNumber !== currentlyPlayingSong) {
               songNumberCell.html(playButtonTemplate);
           }
         };
     
     var offHover = function(event) {
         var songNumberCell = $(this).find('.song-item-number');
         var songNumber = songNumberCell.attr('data-song-number');
            if (songNumber !== currentlyPlayingSong) {
                songNumberCell.html(pauseButtonTemplate);
            }
         };
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
 };
    
var setCurrentAlbum = function(album) {
     // #1
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
     // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + '' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     // #3
    $albumSongList.empty();
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };

 //var findParentByClassName = function() {
   // var findParent = document.querySelectorAll('.song-item.number').addEventListener('mouseover', function(event) {
     //   event.target.parentElement.className;
    //}, false);
  
    //return findParent;
    
//};



var clickHandler = function() {
    var songNumber = $(this).attr('data-song-number');

     if (currentlyPlayingSong !== null) {
         var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
		 currentlyPlayingCell.html(currentlyPlayingSong);
     }
     if (currentlyPlayingSong !== songNumber) {
         $(this).html(pauseButtonTemplate);
		currentlyPlayingSong = songNumber;
     } else if (currentlyPlayingSong === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		$(this).html(playButtonTemplate);
		currentlyPlayingSong = null;
     }
};
 
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

 $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
});
     var albumNames = [albumPicasso, albumMarconi, albumOutsiders];
     var index = 0;
     
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     
     albumImage.addEventListener("click", function(event) { 
      setCurrentAlbum(albumNames[index]);
      index ++;
         
         if (index == albumNames.length) {
          index = 0; 
        }
     });
 
 
                       
    
        
    

   

        
