//Project Data
console.log('WatchAnime Website')
console.log('Uploaded To Github')
console.log('SubProject #01, Ver 1.0')

// Audio Script
const audios = document.querySelectorAll('audio');

// Event Listeners
audios.forEach(audio => {
  audio.addEventListener('play', () => {
    // Pause all other audio elements
    audios.forEach(otherAudio => {
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }
    });
  });
});

