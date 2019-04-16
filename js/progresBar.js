

// Progress Bar percentange display.
// References from w3schools.com javascript progress bar.

function progressBarAnimation(daysLeft) {

      var barEl = document.getElementById("progresBar");
      var width = 1;
      var id = setInterval(frame, 40);

      var daysDone =  87 - daysLeft;
      var percentOfprogressDone = ( daysDone * 100) / 87;


      console.log("daysLeft="+daysLeft);
      console.log("days done = "+daysDone);
      console.log("Perc of progress =  " + percentOfprogressDone);

      function frame(){
          if(width > percentOfprogressDone){
            clearInterval(id);
          } else {
            width++;
            barEl.style.width = width + "%";
            barEl.innerHTML= width * 1 +"%";
          }
      }
}// end of animateBar
