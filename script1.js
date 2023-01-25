const quizData = [
    {
        question: "When at an event with many people you have not yet met,you are most likely to",
        a: "Meet and talk with as many as people as possible before the event is over.",
        b: "Observe the event and sit quietly till someone speaks to you.",
        c: "",
        d: "",
        correct1: "a",
        correct2: "b",
        correct3: "c",
        correct4: "d",
    },
    {
        question: "When you are grocery shopping",
        a: "You buy impulsively and often try new products",
        b: "You have a prepared list and almost always buy same products",
        c: "You don't prefer online shopping ,you need to physically see thee product",
        d: "You shop based on reviewing all the details.",
        correct5: "a",
        correct6: "b",
        correct7: "c",
        correct8: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let currentQuiz1 = 0
let score = ""
let score1 = ""
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct1) {
           score ="E"
       }
       if(answer === quizData[currentQuiz].correct2) {
        score="I"
    }
    if(answer === quizData[currentQuiz].correct5) {
        score1 ="F"
    }
    if(answer === quizData[currentQuiz].correct6) {
     score1="T"
 }
 if(answer === quizData[currentQuiz].correct7) {
     score1="S"
 }
 if(answer === quizData[currentQuiz].correct8) {
     score1="In"
 }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your personality is : ${score} ${score1}</h2>
           <br>
           Description :
           <br>
           E - Extrovert
           <br>
           I - Introvert
           <br>
           ---------------
           <br>
           F - Feeling
           <br>
           T - Thinker
           <br>
           S - Sensor
           <br>
           In - Intuitive
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})