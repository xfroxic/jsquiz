// const quizContainer = document.getElementById('quiz')
// const questionBoxes = document.getElementById('questionBox')
// const submitButton = document.getElementById('submit')

// function buildQuiz(){
//     const output = [];

//     myQuestions.forEach((currentQuestion, questionNumber) => {
//         output.push(
//             `<div class="question"> ${currentQuestion.question}</div>
//             <input type="text" name="question${questionNumber}"</div>`
//             )
//         }
//     )
//     // quizContainer.innerHTML = output.join('');
// }

// function showResults() {
//     let submitButton = document.getElementById('submit').value
//     myQuestions.forEach( (currentQuestion, questionNumber) => {
//         if (submitButton === currentQuestion.answer) {
//             document.getElementById('questionBox').style.backgroundColor = 'lightGreen'
//         }
//         else { document.getElementById('questionBox').style.backgroundColor = 'lightCoral' }
//         }
//     )
// }


// submitButton.addEventListener('click', showResults)

// function buildQuiz(){
//     questionContainer.innerHTML = `
//         <div class="row" id="quiz">
//             <div class="col-sm-6" id="q1">
//                 <div class="container-fluid" style="margin: 30px;">
//                     <div class="row">
//                         <h3>Question ${ myQuestions.number }</h3>
//                     </div>
//                     <div class="row">
//                         <p>${ myQuestions.question }</p>
//                     </div>
//                     <div class="row">
//                         <input type="text" id="submit">
//                         <button type ="button" onclick="getAnswer()" class ="btn btn-primary" style="margin-left: 10px;">Submit Answer</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         for (question in myQuestions)
//     `
// }

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

// buildQuiz();

// function getAnswer() {
//     let submitButton = document.getElementById('submit').value
//     if (submitButton == `${ myQuestions.answer }`)  {
//         document.getElementById('q1').style.backgroundColor = 'lightGreen'}
//     else { document.getElementById('q1').style.backgroundColor = 'lightCoral'}
//     }
    
function question1() {
    let submitButton = document.getElementById('submit1').value
    if (submitButton == 24) {
        document.getElementById('q1').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q1').style.backgroundColor = 'lightCoral'}
    }

function question2() {
    let submitButton = document.getElementById('submit2').value
    if (submitButton == 9001) {
        document.getElementById('q2').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q2').style.backgroundColor = 'lightCoral'}
    }

function question3() {
    let submitButton = document.getElementById('submit3').value
    if (submitButton == 9000) {
        document.getElementById('q3').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q3').style.backgroundColor = 'lightCoral'}
    }

function question4() {
    let submitButton = document.getElementById('submit4').value
    if (submitButton == "clown") {
        document.getElementById('q4').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q4').style.backgroundColor = 'lightCoral'}
    }

function question5() {
    let submitButton = document.getElementById('submit5').value
    if (submitButton == "underwater basket weaver") {
        document.getElementById('q5').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q5').style.backgroundColor = 'lightCoral'}
    }

function question6() {
    let submitButton = document.getElementById('submit6').value
    if (submitButton == "zoom") {
        document.getElementById('q6').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q6').style.backgroundColor = 'lightCoral'}
    }

function question7() {
    let submitButton = document.getElementById('submit7').value
    if (submitButton == 4) {
        document.getElementById('q7').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q7').style.backgroundColor = 'lightCoral'}
    }

function question8() {
    let submitButton = document.getElementById('submit8').value
    if (submitButton == "firestarter") {
        document.getElementById('q8').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q8').style.backgroundColor = 'lightCoral'}
    }

function question9() {
    let submitButton = document.getElementById('submit9').value
    if (submitButton == "lucastle") {
        document.getElementById('q9').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q9').style.backgroundColor = 'lightCoral'}
    }

function question10() {
    let submitButton = document.getElementById('submit10').value
    if (submitButton == "nfts") {
        document.getElementById('q10').style.backgroundColor = 'lightGreen'}
    else { document.getElementById('q10').style.backgroundColor = 'lightCoral'}
    }