document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "2";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "1";
    }
  });

  volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
  });
});
