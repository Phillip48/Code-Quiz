

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
// Allows you to keep a timer and scorefor your quiz
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
    var currentQuestions = questions[questionsIndex];

    //update the code question title with current code

    //clear out old question chocies

    // we can loop over the choices using for each

    //attach click event to listner

    //display the choice on the page
}

// question button clicks
function clickQuestions() {
    // error handling for incorrect answer to question

    // time deduction

    // display new time once deduction is done

    // flash the right or wrong feedback under the page question 

    // Move to the next question

    // check if all questions are dopne being asked
}

// end the quiz
function endQuiz() {
    // stop the timer
    clearInterval(timerId);

    // show final screen
    
    // show final score

    // hide questions
}

function clockCountDown() {
    // update the time
    timer = setInterval(function () {
        time--;
    timerElement.textContent = time;
    if (time <=0) {
        endQuiz();
    }
    },1000);
};

function saveHighScores() {
    // get value from your input box
    var value = initialsElement.value 
    // make sure user wrote intials
    if (value === ""){
        return
    }
    // local storage.... !Not sure what variable to use!
    localStorage.setItem("Scores", )
    // redirect to highscore page// might have to chnage link
    location.href="file:///C:/Users/phill/OneDrive/Documents/UCF/homework/Code-Quiz/highscore.html"
}
// key event function
function enterBtnEvent() {
    // Give enter key abaility to save your highscore when key down
}

// user clicks button to save their initials
submitBtn.onclick = saveHighScores;
// user clicks to begin quiz
startGame.onclick = startQuiz;