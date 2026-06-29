function checkCode() {

  let code =
  document.getElementById("codeInput")
  .value;

  let message =
  document.getElementById("message");

  if(code === "4-G0Ny") {

message.innerHTML =
"ACCESS GRANTED";

document
.getElementById("directory")
.style.display = "block";

  }

  else {

    message.innerHTML =
    "INVALID CODE";

  }

}
function openAudioFile() {

  document
  .getElementById("audioFile")
  .style.display = "block";

}
function checkSubCode() {

  let subCode =
  document
  .getElementById("subCodeInput")
  .value;

  if(subCode === "P41N") {

    document
    .getElementById("recoveryStatus")
    .innerHTML = "100%";

    document
    .getElementById("realAudio")
    .style.display = "block";

  }

}