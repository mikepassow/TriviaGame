

// Questions for the quiz

// function for question text, question choices, and question answers ----------------------

function Questions(text, choices, answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Questions.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

// Quiz controller/scores ----------------------------------------------

function Quiz (questions) {
    this.score= 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

// Questions array and functions ------------------------------

function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
        }
    }
}

var questions = [
    new Question('Which language is used for styling web pages?', ['Java', 'HTML', 'CSS', 'Ruby'], 'CSS'),
    new Question('What is Jquery?', ['Library', 'Template', 'Webpage', 'Doctument'], 'Library'),
    new Question('There are ___ main components in object oriented programming.' ['1', '2', '4', '5'], '4'),
    new Question('True/False, HTML stands for Hyper Text Markup Language.' ['True', 'False'], 'True'),
    new Question('True/False,', 'CSS stands for Casting Style Sheet.' ['True', 'False'], 'False'),
];

var quiz = new Quiz(questions);

populate();