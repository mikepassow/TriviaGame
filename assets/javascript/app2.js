

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var correct = 0;

    if(question1 === "CSS") {
        correct++;
    }
    if(question2 === "True") {
        correct++;
    }
    if(question3 === "False") {
        correct++;
    }
    if(question4 === "Sheet") {
        correct++;
    }
    if(question5 === "All of the above") {
        correct++;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct!";

}