

//================Global variables===================//
// VAR for button ID's
var startGame = document.getElementById("start-game");
var submitBtn = document.getElementById("submit");

//  VAR for ID's throughout the quiz. Helps traverse the DOM
var questionsElement = document.getElementById("questions");
var timerElement = document.getElementById("time");
var choicesElement = document.getElementById("choices");
var initialsElement = document.getElementById("initials");
var feedBackElement = document.getElementById("feedback");

var highScore = [];

//Questions for Quiz
var questions = [
    {
        title: "When was rock climbing added to the Olympics?",
        choices: ["2019", "2020", "2021", "Never was added"],
        answer: "2020"
    },
    {
        title: "How did Spider-man get his powers?",
        choices: ["He bought them", "He was born with them", "Tony stank gave it to him", "He was bitten by a spider"],
        answer: "Bitten by a spider"
    },
    {
        title: "In what year did the Beeteles Band begin",
        choices: ["1950", "1953", "1956", "1960"],
        answer: "1956"
    },
    {
        title: "Bootcamp class start at: ",
        choices: ["9:15am", "10:00am", "9:30am", "I'm not in the military"],
        answer: "10:00am"
    },
    {
        title: "Who free solo climbed El Cap",
        choices: ["Alex Honnold", "Adam Ondra", "Tommy Caldwell", "Alexander Megos"],
        answer: "Alex Honnold"

    }
];

//Variables to keep track of time'
var questionsIndex = 0;
// Indexed at 0
var time = questions.length * 15;
// Allows you to keep a timer and score for your quiz
var timerId;

//================Global variables===================//

// start quiz function
function startQuiz() {
    // Function variables
    var hideScreen = document.querySelector(".hide-screen")
    var highScoreBtn = document.getElementById("highscore");

    // Hides main screen when button is clicked
    hideScreen.setAttribute("class", "hide");
    highScoreBtn.setAttribute("class", "hide");

    // make questions appear by taking out hide class
    questionsElement.removeAttribute("class", "hide");

    // start time
    clockCountDown();

    //show starting time on page

    getQuestions();
}

function getQuestions() {
    choicesElement.textContent = "";
    // create a variable to get the questions array 
    var titleElement = document.getElementById('question-title');
    var currentQuestion = questions[questionsIndex];
    console.log(currentQuestion);
    titleElement.textContent = currentQuestion.title

    currentQuestion.choices.forEach(function (choices, i) {
        var choicesBtn = document.createElement('button');
        choicesBtn.setAttribute("class", "choices");
        choicesBtn.setAttribute("value", choices);
        choicesBtn.textContent = choices;
        choicesElement.appendChild(choicesBtn);

    });
    //attach click event to listner

    //display the choice on the page

}

// question button clicks // Error code from this function
function clickQuestions(event) {
    var response = document.createElement('h3');
    if (event.target.matches(".choices")) {
        // var questionAnswers = questions.answers
        //var questionChoices = questions.choices
        var questionsLength = questions.length-1

console.log(event.target.textContent);

        // error handling for incorrect answer to question
        if (event.target.textContent !== questions[questionsIndex].answer) {
            // time deduction
            time -= 15;
            //Wrong!
           // response.textContent('Wrong!');
        }
       
        // display new time once deduction is done
        if (event.target.textContent == questions[questionsIndex].answer) {
            // time deduction
            //Correct!
           // response.textContent('Correct!');
        } 

        // Move to the next question
        questionsIndex++;

        // check if all questions are done being asked
        if (questionsIndex === questionsLength) {
            endQuiz();
        } else {
            getQuestions();
        }
    }
}

// end the quiz
function endQuiz() {
    var highScoreBtn = document.getElementById("highscore");
    var finalScreen = document.getElementById('final-screen');
    var finalScore = document.getElementById('final-score');


    // stop the timer
    clearInterval(timer);

    // Show highscore button in top corner
    highScoreBtn.removeAttribute("class", "hide");


    // show final screen
    finalScreen.removeAttribute("class", "hide");

    // show final score
    finalScore.removeAttribute("class", "hide");

    // hide questions
    questionsElement.setAttribute("class", "hide");
}

function clockCountDown() {
    // update the time
    timer = setInterval(function () {
        time--;
        timerElement.textContent = time;
        if (timer === 0) {
            endQuiz();
        }
    }, 1000);
};

//fix some code in function // delete note when done
function saveHighScores() {
    // get value from your input box
    var value = initialsElement.value
    // make sure user wrote intials
    if (value === "") {
        return
    }
    // local storage.... !Not sure what variable to use!
    localStorage.setItem("Scores", highScore)
    // redirect to highscore page// might have to change link
    location.href = "file:///C:/Users/phill/OneDrive/Documents/UCF/homework/Code-Quiz/highscore.html"
}
// key event function
function enterBtnEvent() {
    // Give enter key ability to save your highscore when key down ???? check code
    initialsElement.addEventListener("keyup", "enter")
}

// user clicks button to save their initials
submitBtn.onclick = saveHighScores;
// user clicks to begin quiz
startGame.onclick = startQuiz;

document.querySelector('.wrapper').addEventListener("click", clickQuestions)