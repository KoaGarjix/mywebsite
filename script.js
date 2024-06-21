document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "Vituttaako?";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "Laita vaikka päälle";
    }
  });

  volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
  });
});
