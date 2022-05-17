const requestBtn = document.getElementById("requestBtn");
const shareBtn = document.getElementById("shareBtn");
const videoEl = document.getElementById("video");

requestBtn.addEventListener("click", () => {
  selectMediaStream();
});
shareBtn.addEventListener("click", async () => {
  shareBtn.disabled = true;
  await videoEl.requestPictureInPicture();
  shareBtn.disabled = false;
});

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    console.log("error");
  }
}
