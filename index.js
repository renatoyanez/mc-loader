var barSize = 0;
var sizeLimit = 100;
var startTimer;

const startButton = document.querySelector("#start-b");
const stopButton = document.querySelector("#stop-b");
const resetButton = document.querySelector("#reset-b");

startButton.addEventListener("click", () => {
  startTimer = setInterval(() => {
    if (barSize >= sizeLimit) {
      startButton.disabled = true;
      stopButton.disabled = true;
      return;
    }
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    barSize++;
    updateView();
  }, 100);
});

stopButton.addEventListener("click", () => {
  clearInterval(startTimer);
  startButton.disabled = false;
  stopButton.disabled = true;
  updateView();
});

resetButton.addEventListener("click", () => {
  clearInterval(startTimer);
  barSize = 0;
  startButton.disabled = false;
  resetButton.disabled = true;
  stopButton.disabled = true;
  updateView();
});

function updateView() {
  document.getElementById("percentage").innerText = `${barSize}%`;
  document.getElementById("loader").style.width = `${barSize}px`;
}
/***
 * Overview:
Creating a loading bar that every 0.1 seconds increases 1% of completion. It should have a start button, a reset button, and a stop button. It should have a text label indicating the percentage rate.
 
Requirements:
Every 0.1 seconds the bar should increase 1%.
The start button should begin the bar percentage increments.
The stop button should stop the bar percentage increments.
The reset button should reset the progress to zero.
If the progress bar percentage is 100%, the stop and start buttons should be disabled and the reset button should be enabled.
If the progress bar percentage is 0%, the stop and reset buttons should be disabled and the start button should be enabled.
If the progress bar is currently increasing, the start button should be disabled and the reset and stop buttons should be enabled.
 
Evaluated Skills:
Reading comprehension.
Problem solving.
Stress management.
 
Restrictions:
It should be created using vanilla JavaScript, HTML, and CSS.
External libraries are forbidden.
It should be finished in 30 minutes or less.
Google is allowed, but sites like Stack Overflow are not. It means, you can look for docs but no solutions.
 */
