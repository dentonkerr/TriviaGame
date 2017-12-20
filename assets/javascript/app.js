//timer created
var timeLeft = 30;


$("#start").on("click", function countdown() {

    var timerId = setInterval(countdown, 1000);

    if (timeLeft > 0) {
        timeLeft--;
        $("#start").html(timeLeft);
        console.log("test");    //timeLeft decreasing very rapidly
        //check score
    }
    
    else if (timeLeft === 0) {
            clearInterval(timerId);
            //check score
        } 
    //else if (submit button clicked)
        //check score
        
});

