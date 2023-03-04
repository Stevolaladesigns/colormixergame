// Define the primary and secondary colors
const primaryColors = ['red', 'yellow', 'blue'];
const secondaryColors = ['purple', 'green', 'orange'];

// Get the color boxes from the HTML document
const colorBoxes = document.querySelectorAll('.color-box');

// Choose a random secondary color at the beginning of the game
const secondaryColor = secondaryColors[Math.floor(Math.random() * secondaryColors.length)];
document.getElementById('secondary-color').classList.add(secondaryColor);

// Keep track of the selected primary colors
let selectedColors = [];

// Add event listeners to the color boxes
colorBoxes.forEach(colorBox => {
  colorBox.addEventListener('click', () => {
    // Add the color to the selected colors list
    selectedColors.push(colorBox.classList[1]);
    colorBox.classList.add('selected');

    // If two primary colors have been selected, check if they make the secondary color
    if (selectedColors.length === 2) {
      if (selectedColors.includes('red') && selectedColors.includes('yellow') && secondaryColor === 'orange' ||
          selectedColors.includes('red') && selectedColors.includes('blue') && secondaryColor === 'purple' ||
          selectedColors.includes('yellow') && selectedColors.includes('blue') && secondaryColor === 'green') {
        document.getElementById('message').textContent = 'Congratulations! You made the secondary color.';
      } else {
        document.getElementById('message').textContent = 'Sorry, that combination does not make the secondary color.';
      }

      // Reset the selected colors list and color boxes
      selectedColors = [];
      colorBoxes.forEach(colorBox => colorBox.classList.remove('selected'));
    }
  });
});

// Add an event listener to the refresh button

let restart = document.getElementById('refresh-button');

restart.addEventListener('click' ,function(e){
  e.preventDefault()
  location.reload()
})



var timer = 20; // set the initial value of the timer to 20 seconds

function updateTimer() {
  timer--; // decrement the timer value by 1 every second
  if (timer <= 0) { // if the timer value reaches zero or less
    clearInterval(timerInterval); // stop the timer from updating
    document.getElementById("timer").innerHTML = "Game Over"; // display "Game Over"
  } else {
    document.getElementById("timer").innerHTML = "Time: " + timer + "s"; // display the timer value
  }
}

var timerInterval; // declare the timerInterval variable outside the event listener

document.getElementById("play-button").addEventListener("click", function() {
  // start the timer when the player clicks the "Play" button
  timerInterval = setInterval(updateTimer, 1000); // call the updateTimer function every second (1000 milliseconds)
});
