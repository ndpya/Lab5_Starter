// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelector = document.getElementById("horn-select");
  if(!hornSelector){
    console.log("horn selector not found");
  }
  hornSelector.addEventListener('change', (event) => {
    const selection = event.target.value;
    if(selection == "air-horn"){
      console.log("air horn");
      
    }
    else if(selection == "car-horn"){
      console.log("car horn");
    }
    else{
        console.log("party horn");
    }
  });
}


