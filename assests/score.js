//checks if user hit enter for initials//

var initialsElement = document.getElementById("initials");

var highScore = [];

function printScores() {
    // Getting scores from local storage or set to an empty array
    var topScore = JSON.parse(window.localStorage.getItem("topScore")) || highScore;

    // Sorting the different scores in decending order
    topScore.sort(function(a,b) {
        return b.score -a.score;
    });

    topScore.forEach(function (newScore) {
        // LI log for scores
        var liElement = document.createElement("li");
        liElement.textContent = newScore.initials + " - " + newScore.score;

        var olElement = document.getElementById("topScore");
        olElement.appendChild(liElement);
console.log();
    })
} 

// clear high score function
function deleteScores() {
    // remove item from local storage
    window.localStorage.removeItem("topScore");
    // reloads the page
    window.location.reload();
}

// Event listner/click
document.getElementById("button-clear").onclick = deleteScores;
// Callback function to run the page on load
printScores();