function buildQuiz(){
    // var element = document.getElementById('questionContainer')
    // element.innerText = 'test'
    let questionContainer = document.getElementById('questionContainer')
    let iH = ''
    for (i = 0; i < myQuestions.length; i++) {
        if (i % 2 == 0 || i == 0) {
            iH += `<div class="row" id="quiz">`
        }
        iH += `            
                <div class="col-sm-6" id="question_${i}">
                    <div class="container-fluid" style="margin: 30px;">
                        <div class="row">
                            <h3>Question ${ myQuestions[i].number }</h3>
                        </div>
                        <div class="row">
                            <p>${ myQuestions[i].question }</p>
                        </div>
                        <div class="row">
                            <input type="text" onBlur="getAnswer(this, ${i})" id="submit">
                        </div>
                    </div>
                </div>        
        `
        if (i % 2 != 0) {
            iH += `</div>`
        }
    }
    questionContainer.innerHTML = iH
}

let answersCorrect = 0

function getAnswer(currentInput, currentQuestionIndex) {
    let userInput = currentInput.value
    if (userInput == `${myQuestions[currentQuestionIndex].answer}`) {
        document.getElementById("question_"+currentQuestionIndex).style.backgroundColor = 'lightGreen';
        // answersCorrect++;
        // console.log(answersCorrect);
        // correctAnswerTracker();
    }
    else { document.getElementById("question_" + currentQuestionIndex).style.backgroundColor = 'lightCoral';
        // answersCorrect--;
    }
}

function correctAnswerTracker() {
    alert
    let numberCorrect = document.getElementById("numberCorrect")
    let iH = ''
    if (answersCorrect > 0) {
        iH += `${answersCorrect} out of ${myQuestions.length} correct.`
    }
    numberCorrect.innerHTML = iH
}

const myQuestions = [
    {
        number: 1,
        question: "What is Russel's 'Athleticism' score?",
        answer: 24
    },
    {
        number: 2,
        question: "What is Brandon's 'mad science' score?",
        answer: 9001
    },
    {
        number: 3,
        question: "What is Brandon's 'humor' score?",
        answer: 9000
    },
    {
        number: 4,
        question: "What is Frank's occupation?",
        answer: "clown"
    },
    {
        number: 5,
        question: "What is Derek M's occupation?",
        answer: "underwater basket weaver"
    },
    {
        number: 6,
        question: "What is Jay's id?",
        answer: "zoom"
    },
    {
        number: 7,
        question: "What id did Ben steal from Frank?",
        answer: 4
    },
    {
        number: 8,
        question: "What is Russel's occupation?",
        answer: "firestarter"
    },
    {
        number: 9,
        question: "What is Lucas's nickname?",
        answer: "lucastle"
    },
    {
        number: 10,
        question: "What will Derek H eventually get into?",
        answer: "nfts"
    },
]
window.onload = function () { buildQuiz(); }