const video = document.querySelector("#lecture-video");
const pausePosition = document.querySelector("#pause-position");
const playbackError = document.querySelector("#playback-error");

if (!(video instanceof HTMLVideoElement) || !(pausePosition instanceof HTMLOutputElement) ||
    !(playbackError instanceof HTMLElement)) {
  throw new Error("Lecture player elements are missing.");
}

const lectureFilename = "Wykład 1. Kanał telekomunikacyjny.m4v";
const secondsFormatter = new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 3 });

video.addEventListener("pause", () => {
  pausePosition.value = `${secondsFormatter.format(video.currentTime)} s`;
});

video.addEventListener("error", () => {
  playbackError.hidden = false;
});

video.src = `/lectures/${encodeURIComponent(lectureFilename)}`;
