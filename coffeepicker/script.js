/* ==================================================
   COFFEE PICKER
   SCRIPT.JS
================================================== */

/* ==================================================
   APPLICATION STATE
================================================== */

const app = {

    currentQuestion: 0,

    answers: {},

    coffees: []

};

/* ==================================================
   DOM ELEMENTS
================================================== */

const container = document.querySelector("#question-container");

const step = document.querySelector(".step");

const progress = document.querySelector(".progress-bar");

/* ==================================================
   INITIALIZATION
================================================== */

function init() {

    app.currentQuestion = 0;

    app.answers = {};

    app.coffees = coffees.map(coffee => {

        return {

            ...coffee,

            score: 0

        };

    });

    renderQuestion();

}

document.addEventListener("DOMContentLoaded", init);

/* ==================================================
   RENDER QUESTION
================================================== */

function renderQuestion() {

    const question = questions[app.currentQuestion];

    step.textContent =
        `Otázka ${app.currentQuestion + 1} z ${questions.length}`;

    progress.style.width =
        `${((app.currentQuestion + 1) / questions.length) * 100}%`;

    container.innerHTML = `

        <div class="question">

            <h2>${question.title}</h2>

            <div class="answers">

                ${question.answers.map(answer => `

                    <button
                        class="answer-btn"
                        data-value="${answer.value}"
                    >

                        ${answer.text}

                    </button>

                `).join("")}

            </div>

        </div>

    `;

    addButtonEvents();

}

/* ==================================================
   BUTTON EVENTS
================================================== */

function addButtonEvents() {

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {

        button.addEventListener(

            "click",

            handleAnswer

        );

    });

}

/* ==================================================
   HANDLE ANSWER
================================================== */

function handleAnswer(event) {

    const button =
        event.currentTarget;

    button.classList.add("selected");

    const question =
        questions[app.currentQuestion];

    app.answers[question.id] =
        button.dataset.value;

    setTimeout(() => {

        nextQuestion();

    }, 220);

}

/* ==================================================
   NEXT QUESTION
================================================== */

function nextQuestion() {

    app.currentQuestion++;

    if (app.currentQuestion >= questions.length) {

        calculateScores();

        return;

    }

    renderQuestion();

}

/* ==================================================
   CALCULATE SCORES
================================================== */

function calculateScores() {

    app.coffees.forEach(coffee => {

        coffee.score = 0;

        /* ==========================
           CAFFEINE
        ========================== */

        if (String(app.answers.caffeine) === String(coffee.caffeine)) {

            coffee.score += 30;

        }

        /* ==========================
           CUP SIZE
        ========================== */

        if (app.answers.cup === coffee.cup) {

            coffee.score += 25;

        }

        /* ==========================
           MILK
        ========================== */

        if (app.answers.milk === "milk") {

            coffee.score += coffee.scores.milk * 8;

        }

        if (app.answers.milk === "black") {

            coffee.score += (3 - coffee.scores.milk) * 6;

        }

        /* ==========================
           ICED
        ========================== */

        if (app.answers.temperature === "iced") {

            coffee.score += coffee.scores.iced * 8;

        }

        if (app.answers.temperature === "hot") {

            coffee.score += (3 - coffee.scores.iced) * 4;

        }

        /* ==========================
           INTENSITY
        ========================== */

        if (app.answers.intensity === "light") {

            coffee.score += Math.max(0, 10 - coffee.intensity);

        }

        if (app.answers.intensity === "medium") {

            coffee.score += 10 - Math.abs(coffee.intensity - 6);

        }

        if (app.answers.intensity === "strong") {

            coffee.score += coffee.intensity;

        }

        /* ==========================
           FLAVOUR
        ========================== */

        const flavour = app.answers.flavour;

        if (

            flavour &&
            coffee.scores.flavors[flavour] !== undefined

        ) {

            coffee.score +=

                coffee.scores.flavors[flavour] * 10;

        }

    });

    app.coffees.sort((a, b) => b.score - a.score);

    renderResults();

}

/* ==================================================
   RESULTS
================================================== */

function renderResults() {

    const top = app.coffees.slice(0, 3);

    container.innerHTML = `

        <div class="results">

            <h2>Doporučené kávy</h2>

            ${top.map(createCoffeeCard).join("")}

            <button
                class="restart-btn"
                onclick="restart()"
            >

                Vybrat znovu

            </button>

        </div>

    `;

    step.textContent = "Hotovo";

    progress.style.width = "100%";

}

/* ==================================================
   COFFEE CARD
================================================== */

function createCoffeeCard(coffee) {

    return `

        <div
            class="coffee-card"
            style="border-color:${coffee.accent}"
        >

            <img
                src="images/${coffee.image}"
                alt="${coffee.name}"
            >

            <h3>${coffee.name}</h3>

            <p>${coffee.description}</p>

            <div class="coffee-meta">

                <span>${coffee.volume} ml</span>

                <span>Intenzita ${coffee.intensity}</span>

            </div>

            <div class="coffee-notes">

                ${coffee.notes.map(note => `

                    <span>${note}</span>

                `).join("")}

            </div>

            <div class="coffee-score">

                Skóre ${coffee.score}

            </div>

        </div>

    `;

}

/* ==================================================
   RESTART
================================================== */

function restart() {

    init();

}
