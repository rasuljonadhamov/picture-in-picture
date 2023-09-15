const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaScreen() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    // error
    console.log(err);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;

  await videoElement.requestPictureInPicture();

  button.disabled = false;
});

selectMediaScreen();
