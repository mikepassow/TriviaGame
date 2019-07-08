


function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var correct = 0;
    var incorrect = 0;

    //QUESTION 1
    if(question1 === "CSS") {
        correct++;
    }
    else if (question1 === 'Ruby' || 'HTML' || 'C++'){
        incorrect++
    }
    //QUESTION 2
    if(question2 === "True") {
        correct++;
    }
    else if (question2 === 'False'){
        incorrect++
    }
    //QUESTION3
    if(question3 === "False") {
        correct++;
    }
    else if (question3 === 'True'){
        incorrect++
    }
    //QUESTION4
    if(question4 === "Sheet") {
        correct++;
    }
    else if (question4 === 'Show' || 'Storage' || 'Store'){
        incorrect++
    }
    //QUESTION5
    if(question5 === "All of the above") {
        correct++;
    }
    else if (question5 === 'CSS' || 'HTML' || 'Javscript'){
        incorrect++
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct!";
    document.getElementById("numberIncorrect").innerHTML = "You got " + incorrect + " incorrect!";

}

$("#startButton").on("click", start);

function start() {
	$("#startButton").hide();
	$("#mainContainer").show();


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = alert('Times up! Please submit your quiz');
        }
    }, 1000);
    

}

jQuery(function ($) {
    var fiveMinutes = 60 * 3,
        display = $('#timer');
    startTimer(fiveMinutes, display);
});


};
