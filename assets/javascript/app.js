//timer created on click
var timeLeft = 5;
var timerId;
var submitButton;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//starts clock on click
$("#start").on("click", function(){
	timerId = setInterval(countdown, 1000);
});

//stops clock on submit click, run checkScore()
submitButton = $('#submit').click(function() {
    clearInterval(timerId);
    console.log("hey");
    checkScore();
});

//timer function
function countdown() {

    if (timeLeft > 0) {
        timeLeft--;
        $("#start").html(timeLeft);
    }
    
    else if (timeLeft === 0) {
        clearInterval(timerId);
        checkScore();
    }
};

//check value selected, update score
//pull value from user answers********
function checkScore () {

    var radioValueOne = $("input[type='radio'][name='Q1']:checked").val();
    var radioValueTwo = $("input[type='radio'][name='Q2']:checked").val();
    var radioValueThree = $("input[type='radio'][name='Q3']:checked").val();

    $("#corrAnswers").html(correct);
    $("#wrongAnswers").html(incorrect);
    $("#noAnswer").html(unanswered);

    if (radioValueOne === "correct") {
        correct++;
        $("#corrAnswers").html(correct);
    }
    else if (radioValueOne === "incorrect") {
        incorrect++;
        $("#wrongAnswers").html(incorrect);
    }
    else if (radioValueOne !== "correct" && radioValueOne !== "incorrect") {
        unanswered++;
        $("#noAnswer").html(unanswered);
    }
    if (radioValueTwo === "correct") {
        correct++;
        $("#corrAnswers").html(correct);
    }
    else if (radioValueTwo === "incorrect") {
        incorrect++;
        $("#wrongAnswers").html(incorrect);
    }
    else if (radioValueTwo !== "correct" && radioValueTwo !== "incorrect") {
        unanswered++;
        $("#noAnswer").html(unanswered);
    }
    if (radioValueThree === "correct") {
        correct++;
        $("#corrAnswers").html(correct);
    }
    else if (radioValueThree === "incorrect") {
        incorrect++;
        $("#wrongAnswers").html(incorrect);
    }
    else if (radioValueThree !== "correct" && radioValueThree !== "incorrect") {
        unanswered++;
        $("#noAnswer").html(unanswered);
    }
};

// var radioValueTwo = $("input[name='Q2']:checked").val();
// var radioValueThree = $("input[name='Q3']:checked").val();
// var radioValueFour = $("input[name='Q4']:checked").val();
// var radioValueFive = $("input[name='Q5']:checked").val();
// var radioValueSix = $("input[name='Q6']:checked").val();
// var radioValueSeven = $("input[name='Q7']:checked").val();
// var radioValueEight = $("input[name='Q8']:checked").val();
// var radioValueNine = $("input[name='Q9']:checked").val();
// var radioValueTen = $("input[name='Q10']:checked").val();