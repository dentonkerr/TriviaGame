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

//stops clock upon submit click
submitButton = $('#submit').click(function() {
    clearInterval(timerId);
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
    else if (submitButton) {
        checkScore();
    }
};

var radioValueOne = $("input[type='radio']:checked").val();
console.log(radioValueOne);


//check value selected, update score
function checkScore () {
    if (radioValueOne === "correct") {
        correct++;
        $("#corrAnswers").html(correct);
    }
    else if (radioValueOne === "incorrect") {
        incorrect++;
        $("#wrongAnswers").html(incorrect);
    }
    else if (radioValueOne !== "correct" || radioValueOne !== "incorrect") {
        unanswered++;
        $("#noAnswers").html(unanswered);
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