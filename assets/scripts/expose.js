// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.querySelector('img');
  const hornSelector = document.getElementById('horn-select');
  const volumeSelector = document.getElementById('volume');
  const button = document.querySelector('button');
  const audio = document.querySelector('audio');
  const volumeIcon = document.querySelector('#volume-controls img');

  if(!hornSelector){
    console.log('horn selector not found');
  }
  hornSelector.addEventListener('change', (event) => {
    const selection = event.target.value;
    if(selection == 'air-horn'){
      console.log('air horn');
      image.src = 'assets/images/air-horn.svg';
    }
    else if(selection == 'car-horn'){
      console.log('car horn');
      image.src = 'assets/images/car-horn.svg';
    }
    else{
        console.log('party horn');
        image.src = 'assets/images/party-horn.svg';
    }
  });

  button.addEventListener('click', (event) => {
    console.log("button clicked");
    const horn = hornSelector.value;
    if(horn == 'air-horn'){
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(horn == 'car-horn'){
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(horn == 'party-horn'){
      audio.src = 'assets/audio/party-horn.mp3';
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    audio.play();
  });

  volumeSelector.addEventListener('input', (event) => {
    const value = event.target.value; 
    audio.volume = value / 100;

    if(value == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(value >= 1 && value < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(value >= 33 && value < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
}
