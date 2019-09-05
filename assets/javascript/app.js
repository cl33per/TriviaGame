/* //Start of Pseudo code // 

Process of steps in a general order
Page Loads with Start button i.e. #start

When #start is click then:

Only one question at a time will be shown with multiple choices, with a timer (timeKeeper) of 60 seconds. 

If a question is answered stop(timeKeeper), show the correct / win screen,

else if time (timeKeeper) reaches 0 seconds show the lost screen,

start second timer (timeNext) moving to the next question without user input and restarting the timer (timeKeeper) and showing the next question.

When all questions are answers show:

Correct answers:
Incorrect Answers:
Unanswered:

Show a Start over button. DOESN'T RELOAD PAGE, RESETS GAME 

Reset Question Using Timer look in Acticvity 06,08 for timer example. 

//

Whats Needed?

Multiple Timers.
1. Timer for question (timeKeeper)
2. Timer for loading next question (timeNext)
3. Timer
for correct & incorrect respones(timeNext)

Objects & Arrays

1. Array containing the correct Answers i.e. (correctAnswers)
2. Questions as an object with each question being a different property??? i.e. (questionList)
3. Empty Array for pushing users clicked answers
(userGuessed)

*/
$(function () {
    //START

    var correctAnswers = [];
    var userGuessed = [];

    var questionList = {
        questionOne: '',
        questionTwo: '',
        questionThree: '',
        questionFour: '',
    };

    function timeKeeper() {
        var counter = 60;
        var interval = setInterval(function () {
            counter--;
            if (counter <= 0) {
                clearInterval(interval);
                $('#timer').html("<h3>Count down complete</h3>");
                return;
            } else {
                $('#time').text(counter);
                console.log("Timer --> " + counter);
            }
        }, 1000);
    };

    function timeNext() {};


    //GAME STARTS HERE
    $('#start').click(function () {
        timeKeeper();


        //END      
    });

    //END
});