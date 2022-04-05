

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

//Questions for Quiz
var questions = [
    {
        title: "When was rock climbing added to the Olympics?",
        choices: ["2019", "2020", "2021", "Never was added"],
        answers: "2020"
    },
    {
        title: "How did Spider-man get his powers?",
        choices: ["He bought them", "He was born with them", "Tony stank gave it to him", "He was bitten by a spider"],
        answers: "Bitten by a spider"
    },
    {
        title: "In what year did the Beeteles Band begin",
        choices: ["1950", "1953", "1956", "1960"],
        answers: "1956"
    },
    {
        title: "Bootcamp class start at: ",
        choices: ["9:15am", "10:00am", "9:30am", "I'm not in the military"],
        answers: "10:00am"
    },
    {
        title: "Who free solo climbed El Cap",
        choices: ["Alex Honnold", "Adam Ondra", "Tommy Caldwell", "Alexander Megos"],
        answers: "Alex Honnold"

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
    // create a variable to get the questions array 
    var titleElement = document.getElementById('question-title');
    var currentQuestions = questions[questionsIndex];

    titleElement.textContent = currentQuestions.title

    currentQuestions.choices.forEach(function(choices,i) {
        var choicesBtn = document.createElement('button');
        choicesBtn.setAttribute("class", "choices");
        choicesBtn.setAttribute("value", choices);
        choicesBtn.textContent = i+1 + ". " + choices;
        choicesElement.appendChild(choicesBtn);

        choicesBtn.onclick = clickQuestions();
    });
    //attach click event to listner

    //display the choice on the page
    
}

// question button clicks // Error code from this function
function clickQuestions() {
   // var questionAnswers = questions.answers
    //var questionChoices = questions.choices
    var questionsLength = questions.length
    

    // error handling for incorrect answer to question
    if (this.value !== questions[questionsIndex].answers) {
        console.log("wrong");
    }
    // time deduction

    // display new time once deduction is done

    // flash the right or wrong feedback under the page question 

    // Move to the next question
    questionsIndex++;

    // check if all questions are done being asked
    if (questions === questionsLength){
        endQuiz();
    } else {
        getQuestions();
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
    },1000);
};

//fix some code in function // delete note when done
function saveHighScores() {
    // get value from your input box
    var value = initialsElement.value 
    // make sure user wrote intials
    if (value === ""){
        return
    }
    // local storage.... !Not sure what variable to use!
    localStorage.setItem("Scores", )
    // redirect to highscore page// might have to change link
    location.href="file:///C:/Users/phill/OneDrive/Documents/UCF/homework/Code-Quiz/highscore.html"
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