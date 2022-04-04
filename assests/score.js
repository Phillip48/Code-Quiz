
function printScores() {
    // Getting scores from local storage or set to an empty array
    var playerScores = [];

    // Sorting the different scores in decending order
    playerScores.sort(function(a,b) {
        return b.scores -a.scores;
    });

    playerScores.forEach(function (scores) {
        // LI log for scores
        var liElement = document.createElement("li");
        liElement.textContent = scores.initials + " - " + scores.scores;

        var olElement = document.getElementById("highscores");
        olElement.appendChild(liElement);
        
    })
} 

// clear high score function
function deleteScores() {
    // remove item from local storage
    window.localStorage.removeItem("highscores");
    // reloads the page
    window.localStorage.reload();
}

// Event listner/click
document.getElementById("delete-scores").onclick = deleteScores;
// Callback function to run the page on load
printScores();