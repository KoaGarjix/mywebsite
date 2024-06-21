document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "Pause";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "Play";
    }
  });

  volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
  });
});
