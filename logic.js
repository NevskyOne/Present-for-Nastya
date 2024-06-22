
let quiz;
let answerElements;
let questionElement;
let a_text;
let b_text;
let c_text;

function ToQuest(){
    document.getElementById("main").style.display = "none";
    document.getElementById("quest").style.display = "block"
}
function ToQuestion(){
    document.getElementById("quest").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    quiz = document.getElementById('quiz');
    answerElements = document.querySelectorAll('.answer');
    questionElement = document.getElementById('question')
    a_text = document.getElementById('a_text')
    b_text = document.getElementById('b_text')
    c_text = document.getElementById('c_text')

    loadQuiz();
}
function ToСaesarСipher(){
    document.getElementById("quiz").style.display = "none";
    document.getElementById("caesar-cipher").style.display = "flex";
    document.body.style.backgroundImage = "url('13.png')";
}

const quizData = [
    {
        question: "1. Какое моё любимое блюдо?",
        a: "Бурито",
        b: "Пицца",
        c: "Мороженое",
        correct: "b",
    },
    {
        question: "2. Какая моя любимая компьютерная игра?",
        a: "Портал 2",
        b: "Тимфортрес 2",
        c: "Бесконечное лето",
        correct: "c",
    },
    {
        question: "3. Какое моё любимое время года?",
        a: "Зима",
        b: "Лето",
        c: "Весна",
        correct: "a",
    },
    {
        question: "4. Мой любимый мультик?",
        a: "Рик и Морти",
        b: "Гравити фолс",
        c: "С приветом по планетам",
        correct: "b",
    },
    {
        question: "5. Мой первый язык программирования?",
        a: "Java Script",
        b: "Python",
        c: "Scratch",
        correct: "c",
    },
    {
        question: "6. Как называется университет, который я хочу поступить?",
        a: "ЛЭТИ",
        b: "СПбГУТ",
        c: "ИТМО",
        correct: "c",
    },
    {
        question: "7. Как называется кружок, на который я ходил три года",
        a: "Сетевое и системное администрирование",
        b: "Робототехника",
        c: "Разработка игр на unity",
        correct: "a",
    },
    {
        question: "8. На какой олимпиаде я встретил свою команду?",
        a: "Высшая проба",
        b: "НТО",
        c: "Технокубок",
        correct: "b",
    },
    {
        question: "9. Район Санкт-Петербурга, в котором я раньше жил?",
        a: "Пукшин",
        b: "Автово",
        c: "Девяткино",
        correct: "a",
    },
    {
        question: "10. Предмет, по которому у меня всегда низкие оценки?",
        a: "Биология",
        b: "Литра",
        c: "Физра",
        correct: "c",
    },

];


let currentQuiz = 0;
let score = 0;



function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function Check() {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else if(score == quizData.length){
            ToСaesarСipher();
        }
        else{
            quiz.innerHTML = `<h2 style="margin: 40px;">Ты молодец, ответила на ${score} из ${quizData.length} вопросов, но ты можешь лучше! Попробуй еще раз)</h2>
            <div class="buttons">
                <button  onclick="location.reload()" class="blob-btn">
                Я в этот раз постараюсь лучше!
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br/>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                  </filter>
                </defs>
              </svg>
            `;
        }
    }
};
