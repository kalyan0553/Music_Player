const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSongText = document.getElementById('current-song');
const songItems = document.querySelectorAll('.song-item');

let songList = [
  'song1.mp3', 
  'song2.mp3',
  'song3.mp3',
  'song4.mp3',
  'song5.mp3', 
  'song6.mp3',
  'song7.mp3',
  'song8.mp3',
  'song9.mp3',
  'song10.mp3'
];

let currentSongIndex = 0;


function loadSong(songIndex) {
  audioSource.src = songList[songIndex];
  audioPlayer.load();
  currentSongText.textContent = songList[songIndex].split('.')[0];  
  playPauseBtn.textContent = 'Play';  
}

// Play or Pause the song
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});


nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songList.length; 
  loadSong(currentSongIndex);
  audioPlayer.play();
  playPauseBtn.textContent = 'Pause';
});


prevBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playPauseBtn.textContent = 'Pause';
});


songItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  });
});


loadSong(currentSongIndex);
