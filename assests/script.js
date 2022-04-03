

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