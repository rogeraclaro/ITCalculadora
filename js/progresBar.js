

// Progress Bar percentange display.
// References from w3schools.com javascript progress bar.

function progressBarAnimation() {


      var barEl = document.getElementById("progresBar");
      var width = 1;
      var id = setInterval(frame, 10);

      function frame(){
        if(width >= 100){
          clearInterval(id);
        } else {
          width++;
          barEl.style.width = width + "%";
          barEl.innerHTML= width * 1 +"%";
        }
      }
}// end of animateBar
