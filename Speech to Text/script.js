const SpeechRecognize =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognize = new SpeechRecognize();
const btn = document.querySelector(".control");

function recorderVoice() {
  const isRecording = btn.classList.contains("record");

  if (isRecording) {
    recognize.start();
    btn.classList.remove("record");
    btn.classList.add("pause");
    btn.innerText = "Pause";
  } else {
    recognize.stop();
    btn.classList.remove("pause");
    btn.classList.add("record");
    btn.innerText = "Record";
  }
}
function setVoiceToText(e) {
  let message = document.querySelector(".message");
  message.innerText += `${e.results[0][0].transcript}`;
}

function continueRecord() {
  const isPause = btn.classList.contains("pause");
  if (isPause) {
    recognize.start();
  }
}

function setUpVoice() {
  recognize.lang = "th-TH";
  btn.addEventListener("click", recorderVoice);
  recognize.addEventListener("result", setVoiceToText);
  recognize.addEventListener("end", continueRecord);
}

setUpVoice();
