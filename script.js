const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

document
  .getElementById("startBtn")
  .addEventListener("click", async () => {

    showScreen("frame-screen");

    document.documentElement.requestFullscreen();

    document.getElementById("bgm").play();
});


// CAMERA
const video = document.getElementById("camera");

async function startCamera() {

  const stream =
    await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user"
      },
      audio:false
    });

  video.srcObject = stream;
}


// FRAME SELECT
document
.querySelectorAll(".frame-card")
.forEach(card => {

  card.addEventListener("click", () => {

    showScreen("camera-screen");

    startCamera();

  });

});


// CAPTURE
document
.getElementById("captureBtn")
.addEventListener("click", capturePhoto);

function capturePhoto() {

  const canvas = document.createElement("canvas");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");

  ctx.drawImage(video,0,0);

  const image = canvas.toDataURL("image/png");

  openEditor(image);
}


// EDITOR
function openEditor(image) {

  showScreen("edit-screen");

  const editor =
    new fabric.Canvas("editorCanvas");

  fabric.Image.fromURL(image, img => {

    img.scaleToWidth(300);

    editor.add(img);

  });

}


// QR GENERATION
function generateQR(url) {

  QRCode.toCanvas(
    document.getElementById("qrCanvas"),
    url
  );

}
