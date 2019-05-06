

// Progress Bar percentange display.
// References from w3schools.com javascript progress bar.

function progressBarAnimation(daysLeft) {

      var barEl = document.getElementById("progresBar");
      var width = 1;
      var id = setInterval(frame, 40);
      var daysDone =  87 - daysLeft;
      var percentOfprogressDone = ( daysDone * 100) / 87;


        console.log("% of progress done= " + percentOfprogressDone);
        console.log("daysDone = " + daysDone);
        console.log("daysLeft = " + daysLeft);

      function frame(){
          if(width > percentOfprogressDone){
            clearInterval(id);
          } else {
            width++;
            barEl.style.width = width + "%";
            barEl.innerHTML = width * 1 + "%";
          }
          // console.log("width = "+barEl.style.width);

      }


}// end of animateBar
//reset the progres bar if different calculations are done in the same session
function resetBar(){
  var barEl = document.getElementById("progresBar");
  barEl.style.width = 0;
  barEl.innerHTML= 0 +"%";
}

function setBarTo100(){
  var barEl = document.getElementById("progresBar");
  barEl.style.width = 100 +"%";
  barEl.innerHTML= 100 +"%";
}
