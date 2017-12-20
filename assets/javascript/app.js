//timer created on click
var timeLeft = 30;
var timerId;

$("#start").on("click", function(){
	timerId = setInterval(countdown, 1000);
});

function countdown() {

    if (timeLeft > 0) {
        timeLeft--;
        $("#start").html(timeLeft);
        //check score
    }
    
    else if (timeLeft === 0) {
            clearInterval(timerId);
            //check score
    } 
    //else if (submit button clicked)
        //check score     
};

//function checkScore () {
    //if answer selected === correct answer
        //correct answer++;
    //else if answer selected !== correct answer
        //incorrect answer ++;
    //else if no answer selected
        //unanswered questions ++;