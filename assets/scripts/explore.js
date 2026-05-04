// explore.js

window.addEventListener('DOMContentLoaded', init);
const voiceSelect = document.getElementById("voice-select");
const synth = window.speechSynthesis;
let voices = [];

function init() {
  // TODO
  const button = document.querySelector('#explore button');
  const textArea = document.querySelector('#explore textarea')
  const face = document.querySelector('#explore img');
  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', (event) => {
    const text = textArea.value; 
    console.log("text: ", text);

    if(text.length == 0){
      return;
    } 
    const utterThis = new SpeechSynthesisUtterance(text);
    console.log("selection value: ", voiceSelect.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(const voice of voices){
      if(voice.name == selectedOption){
        utterThis.voice = voice;
      }
    }
    synth.speak(utterThis);
    face.src = 'assets/images/smiling-open.png'
    utterThis.addEventListener("end", (event) =>{
      face.src = 'assets/images/smiling.png';
    });
  });
}
function populateVoiceList(){
  voices = synth.getVoices();
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
}