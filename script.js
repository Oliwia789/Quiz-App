const questions =  [
    {
        question: "What HTML tag is used to create a header in a table ?",
        a: "<th>",
        b: "<theader>",
        c: "<header>",
        d: "<td>",
        correct: "d" 

    }, { 
        question: "What is the most used programming language in 2019 ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }, {
        question: "What does HTML stand for ?",
        a: "Hypertext Markup Language",
        b: "Cascading style sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },{
        question: "What year was JavaScript launched ?",
        a: "2020",
        b: "1995",
        c: "1990",
        d: "none of the above",
        correct: "d"
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = questions[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected () {
    const answersEl = document.querySelectorAll(".answer");
    let answer = undefined;
    answersEl.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
        currentQuiz++;
        if(currentQuiz < questions.length) {
            loadQuiz();
        } else {
            alert("You finished !");
        }
    }
});