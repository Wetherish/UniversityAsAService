const video = document.querySelector("#lecture-video");
const pausePosition = document.querySelector("#pause-position");
const playbackError = document.querySelector("#playback-error");
const lectureTitle = document.querySelector("#lecture-title");

if (!(video instanceof HTMLVideoElement) || !(pausePosition instanceof HTMLOutputElement) ||
    !(playbackError instanceof HTMLElement) || !(lectureTitle instanceof HTMLHeadingElement)) {
  throw new Error("Lecture player elements are missing.");
}

const secondsFormatter = new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 3 });

video.addEventListener("pause", () => {
  pausePosition.value = `${secondsFormatter.format(video.currentTime)} s`;
});

video.addEventListener("error", () => {
  playbackError.hidden = false;
});

try {
  const response = await fetch("/lectures/catalog.json");
  if (!response.ok) {
    throw new Error(`Could not load lecture catalog (HTTP ${response.status}).`);
  }

  const lecture: unknown = await response.json();
  if (typeof lecture !== "object" || lecture === null ||
      !("title" in lecture) || typeof lecture.title !== "string" || !lecture.title.trim() ||
      !("videoFilename" in lecture) || typeof lecture.videoFilename !== "string" ||
      !lecture.videoFilename.trim() || /[/\\]/.test(lecture.videoFilename) ||
      lecture.videoFilename === "." || lecture.videoFilename === "..") {
    throw new Error("The lecture catalog needs a title and a local video filename.");
  }

  document.title = lecture.title;
  lectureTitle.textContent = lecture.title;
  video.src = `/lectures/${encodeURIComponent(lecture.videoFilename)}`;
} catch (error) {
  console.error(error);
  playbackError.textContent = "Could not load the local lecture catalog.";
  playbackError.hidden = false;
}

export {};
