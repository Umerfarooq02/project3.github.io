// Display an alert when the page loads
alert("Hello, this is Number Guessing Game!");

// Generate a random secret number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let currentScore = 10;
let highScore = 0;

document.getElementById("checkButton").addEventListener("click", function() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Invalid input! Enter a number between 1 and 100.";
    } else {
        // Check if the guess is correct
        if (userGuess === secretNumber) {
            document.getElementById("message").textContent = "Congratulations! You guessed the correct number!";
            document.body.style.backgroundColor = "green";
            document.getElementById("highScore").textContent = `History High Score: ${Math.max(currentScore, highScore)}`;
            var imgElement = document.createElement("img");
            imgElement.src = "https://ih1.redbubble.net/image.451034275.3972/st,small,507x507-pad,600x600,f8f8f8.u3.jpg";
            document.write(imgElement.outerHTML);

        } else {
            // Provide hints and update current score
            if (userGuess < secretNumber) {
                document.getElementById("message").textContent = "Too low! Try again.";
            } else {
                document.getElementById("message").textContent = "Too high! Try again.";
            }
            currentScore--;
            document.getElementById("score").textContent = `Current Score: ${currentScore}`;
            if (currentScore === 0) {
                document.getElementById("message").textContent = "Sorry, game is over!";
            }
        }
    }
});

// Reset the game when the 'Play' button is clicked
document.getElementById("playButton").addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    currentScore = 10;
    document.getElementById("score").textContent = "Current Score: 10";
    document.getElementById("message").textContent = "";
    document.getElementById("userGuess").value = "";
    document.body.style.backgroundColor = "white";
});
// You can also use alert inside a function
function showMessage() {
    alert("This is a message from a function!");
}

// Call the function to trigger the alert
showMessage();

