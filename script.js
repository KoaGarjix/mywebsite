document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const volumeSlider = document.getElementById("volumeSlider");

  // Automatically play the audio when the page loads
  audioPlayer.play();

  // Adjust volume using the slider
  volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
  });
});
