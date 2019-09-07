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
    var questionCounter = 0;
    var timer;
    var lost = 0;
    var score = 0;
    var questionList = [{
            question: 'What does HTML Stand for?',
            choices: ['Hypertext Mega Language', 'Hyper Texture Markup Language', 'Hypertext Markup Language', 'Hyper Trunking Markup Language'],
            answer: 'Hypertext Markup Language'
        },
        {
            question: 'How many bits are in a byte?',
            choices: ['10', '3', '6', '8'],
            answer: '8'
        },
        {
            question: 'What does P2P mean?',
            choices: ['Pinapples to Pirates', 'Peer to Peer', 'People to People', 'Pepsi to Peeper'],
            answer: 'Peer to Peer'
        },
        {
            question: 'How many layers are in a Network?',
            choices: ['1', '3', '5', '9', '12', '7'],
            answer: '7'
        },
        {
            question: 'Whats the first layer ing the TCP/IP model?',
            choices: ['Physical', 'Data Link', 'Network', 'Transport', 'Session', 'Presentation', 'Application'],
            answer: 'Physical'
        },
    ];

    function timeKeeper() {

        counter--;
        $("#time").html(`<h3>Time Left: ${counter}</h3>`);

        if (counter === 0) {
            $('#time').html('<h3>OUT OF TIME</h3>');
            clearInterval(timer);
            lost++;
            loadMessage("lost");
            setTimeout(nextQuestion, 3 * 1000);
        }
    };
    // if (counter <= 0) {
    //     
    // } else {
    //     $('#time').text('Time Remaing: ' + counter);
    //     console.log('Timer --> ' + counter);


    function question() {
        clearInterval(timer);
        counter = 5;
        timer = setInterval(timeKeeper, 1000);
        var askQuestion = questionList[questionCounter].question;
        var choices = questionList[questionCounter].choices;
        $('#game').html(`<h2> ${askQuestion}</h2><div class="row mt-5">${loadChoices(choices)}</div>`);
    };


    function loadChoices(choices) {
        let result = "";
        for (let i = 0; i < choices.length; i++) {
            result += `<button type="button" class="btn btn-success userGuessed" data-answer="${choices[i]}">${choices[i]}</button>`;
        }
        return result;
    };

    function nextQuestion() {

        const questionsEnd = (questionList.length - 1) === questionCounter;
        if (questionsEnd) {
            displayResult();
        } else {
            questionCounter++;
            question();
        }

    }

    function loadMessage(status) {
        let correctAnswer = questionList[questionCounter].answer;

        if (status === "win") {
            $("#game").html(`<p class="load-gif">Woot Correct!</p>`)
        } else {
            $("#game").html(`<p class="load-gif">Bummer!</p>
                        <p class="load-gif">The correct answer is ${correctAnswer}.`);
        }
    };

    function displayResult() {
        let result = `<p>You got ${score} question(s) correct!</p>
                <p>You got ${lost} question(s) incorrect!</p>
                <p>Total Questions: ${questionList.length}</p>
                <label class="btn btn-secondary" id="restart"><p>Restart Game</p></label>`
        $("#game").html(result);
    }

    $(document).on('click', '.userGuessed', function () {
        let userGuessed = $(this).attr("data-answer");
        let correctAnswer = questionList[questionCounter].answer;
        if (correctAnswer === userGuessed) {
            score++;
            loadMessage("win");
            setTimeout(nextQuestion, 3 * 1000);
        } else {
            lost++;
            loadMessage("lost");
            setTimeout(nextQuestion, 3 * 1000);
        }
    });
    $(document).on("click", "#restart", function () {
        counter = 5;
        currentQuestion = 0;
        score = 0;
        lost = 0;
        timer = null;

        loadQuestion();
    });
    //GAME STARTS HERE
    $('#start').click(function () {
        $("#start").remove();
        question();
        //END      
    });

    //END
});