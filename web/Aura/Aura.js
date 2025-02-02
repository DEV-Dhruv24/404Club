const questions = [
    {
        question: "✨1️⃣ In your twisted view, what would be the most fitting 'finale' for a horror movie?",
        options: [
            { answer: "Everyone dies in the end, the true darkness prevails. 🖤💀", aura: -800 },
            { answer: "The villain claims victory, while the hero is left broken and scarred. 🔪👹", aura: -600 },
            { answer: "The protagonist survives, yet remains tormented forever, trapped by their own mind. 😱🖤", aura: 400 },
            { answer: "A shocking twist reveals that everyone was dead all along. But was it ever real? 🤯👻", aura: -500 }
        ],
        hint: "Only the most detached minds would choose this without a second thought. 😈"
    },
    {
        question: " 🌪️2️⃣ You hold the power to reshape India’s political system—what’s your move?",
        options: [
            { answer: "Completely overhaul every single politician. 🏛️⚡", aura: -700 },
            { answer: "Empower laws to prevent corruption and safeguard the nation. ⚖️💡", aura: 800 },
            { answer: "Let the youth take control, because they can 'fix everything.' ✊💥", aura: -300 },
            { answer: "Wipe out all party-based politics entirely, chaos for the win. 🔥💣", aura: -1000 }
        ],
        hint: "Maybe the chaos will make you stronger, but is it the right move? 🤔"
    },
    {
        question: "🔥3️⃣ If you could create a new global religion, what would its core belief be?",
        options: [
            { answer: "Everything is meaningless, embrace the chaos. 🌀💀", aura: -900 },
            { answer: "The mind can bend reality, so shape it however you wish. 🧠🔮", aura: 700 },
            { answer: "Control the masses with fear, to keep them in line. 😈💥", aura: -700 },
            { answer: "Freedom above all, without restrictions or boundaries. 🕊️🌍", aura: -300 }
        ],
        hint: "True power lies in controlling the mind, not just the masses. 🤯"
    },
    {
        question: "🍂4️⃣ You are handed an ancient relic that grants you immortality—what do you do?",
        options: [
            { answer: "Destroy it, so no one else can misuse it. 💣⚡", aura: 800 },
            { answer: "Use it to manipulate the world into your perfect vision. 🔮👑", aura: -800 },
            { answer: "Lock it away forever, fearing its power. 🗝️❄️", aura: -400 },
            { answer: "Share it with others, so we can all experience eternity. 👐⏳", aura: -500 }
        ],
        hint: "Immortality might be tempting, but the true question is how you would wield its power. 🔥"
    },
    {
        question: "🎭5️⃣ Your creation—a massive underground city—faces rebellion. How do you respond?",
        options: [
            { answer: "Crush the rebellion mercilessly to establish dominance. 🔥⚔️", aura: -1000 },
            { answer: "Let the people decide their fate; chaos breeds strength. 💣⚖️", aura: -700 },
            { answer: "Negotiate a peaceful resolution, showing compassion. 🕊️🤝", aura: 600 },
            { answer: "Use the rebellion as an excuse to rewrite all the rules. 🔒📝", aura: -800 }
        ],
        hint: "A true ruler knows that strength is born from chaos. 👑"
    },
    {
        question: "🎶6️⃣You find a gateway to another dimension. What do you do with it?",
        options: [
            { answer: "Destroy it, before something worse comes through. 💥🌀", aura: -600 },
            { answer: "Control the gateway and use it for your own purpose. 🚪⚡", aura: 900 },
            { answer: "Send someone else to explore it, you stay in charge. 🧑‍🚀👑", aura: -700 },
            { answer: "Seal it and forget about it forever, never to be opened again. 🚫🔒", aura: -300 }
        ],
        hint: "Curiosity is a curse, but control over the unknown is power. 🔑"
    },
    {
        question: "🌌7️⃣The universe grants you the ability to manipulate time. What will you do first?",
        options: [
            { answer: "Rewind time to alter critical moments, rewriting history. ⏪📜", aura: -800 },
            { answer: "Freeze time, leaving you alone in an empty world. ❄️⏳", aura: 600 },
            { answer: "Fast-forward to the future to see what lies ahead. 🚀⏩", aura: -500 },
            { answer: "Stop time forever, keeping the present moment locked. 🕰️🔒", aura: -400 }
        ],
        hint: "The true challenge is knowing when to let time pass and when to stop it. ⏰"
    },
    {
        question: "🌀8️⃣A shadowy organization offers you unimaginable power. What is your response?",
        options: [
            { answer: "Accept their offer and become their leader. 👑🔮", aura: -1000 },
            { answer: "Use the power for personal gain and wealth. 💰💥", aura: -700 },
            { answer: "Reject them, refusing to be controlled by anyone. 🚫🖤", aura: 900 },
            { answer: "Destroy them and take their power for yourself. 💀⚡", aura: -900 }
        ],
        hint: "The choice is simple: control others or control yourself. 🧠"
    },
    {
        question: "⚡9️⃣You possess the ability to create anything with a mere thought. What do you create first?",
        options: [
            { answer: "A perfect world where everything bends to my will. 🌍⚡", aura: 900 },
            { answer: "A weapon of mass destruction to reshape the world. 💣⚔️", aura: -1000 },
            { answer: "A sanctuary to escape from the chaos of the world. 🏰🔒", aura: -500 },
            { answer: "A mirror to reflect the truth of the world. 🪞🖤", aura: -400 }
        ],
        hint: "Creation comes with a price. What will you shape with your thoughts? 🔮"
    },
    {
        question: "🏰🔟A rival of yours threatens everything you hold dear. What do you do?",
        options: [
            { answer: "Destroy them without hesitation, before they can strike. 💥⚔️", aura: -1000 },
            { answer: "Outsmart them and take everything they value. 💡💀", aura: -800 },
            { answer: "Engage them in a battle of wills, testing your strength. 🧠💪", aura: -600 },
            { answer: "Negotiate peace, hoping they will back down. 🕊️🤝", aura: 300 }
        ],
        hint: "Sometimes the greatest power is in how you manipulate others. 😈"
    }
];


let currentQuestionIndex = 0;
let totalAura = 0;
let answerSelected = false;  // Flag to check if answer is selected

// Function to display the question and options
function showQuestion() {
    const questionContainer = document.getElementById("quiz-container");
    const hintContainer = document.getElementById("hint-container");
    const nextButton = document.getElementById("next-btn");

    // Display the current question and options
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li>
                    <input type="radio" name="question${currentQuestionIndex}" id="option${index}" value="${option.aura}" onclick="selectAnswer(${index})">
                    <label for="option${index}">${option.answer}</label>
                </li>
            `).join('')}
        </ul>
    `;

    // Display the hint
    hintContainer.innerHTML = `<p><strong>Hint: </strong>${currentQuestion.hint}</p>`;

    // Show next button only after answer is selected
    nextButton.style.display = "none"; // Hide the next button initially

    // Ensure the result container is hidden when a new question is shown
    const resultContainer = document.getElementById("result");
    resultContainer.style.display = "none";
}

// Function to handle answer selection
function selectAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    totalAura += currentQuestion.options[optionIndex].aura;
    answerSelected = true; // Mark that the user has selected an answer

    // Show the "Next" button after an answer is selected
    document.getElementById("next-btn").style.display = "inline-block";
}

// Function to move to the next question
function nextQuestion() {
    if (!answerSelected) {
        alert("Please select an answer before proceeding.");
        return;  // Prevent moving to next question if no answer is selected
    }

    answerSelected = false; // Reset answer selected flag
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();  // Show next question
    } else {
        showResults();  // Show results if all questions are answered
    }
}

// Function to display results
function showResults() {
    // Hide the question container, hint container, and next button
    const questionContainer = document.getElementById("quiz-container");
    const hintContainer = document.getElementById("hint-container");
    const nextButton = document.getElementById("next-btn");

    questionContainer.style.display = "none";
    hintContainer.style.display = "none";
    nextButton.style.display = "none";  // Hide next button

    // Display the results container
    const resultContainer = document.getElementById("result");
    const totalAuraElement = document.getElementById("total-aura");
    const auraCategoryElement = document.getElementById("aura-category");

    totalAuraElement.innerText = totalAura;

// Determine the user's aura level based on the total aura
if (totalAura >= 8001) {
    auraCategoryElement.innerText = "Bhai Tera Level Alag Hai 🔥🚀 You’re on a whole different level. The kind of person who walks into a room and instantly becomes the center of attention. Everything you do turns into gold, and even fate seems to favor you. You’re a trendsetter, a game-changer, and nothing in this world can stop you now. You're living the ultimate 'boss' life!";
} else if (totalAura >= 4001) {
    auraCategoryElement.innerText = "Sher Ka Beta/Bati 🦁💥 You’ve got that swagger, that style, and that fearless attitude. Like a lion on the hunt, you don’t settle for anything less than the best. People respect you because you’ve earned it, and no one dares mess with you. But remember, even lions need to rest once in a while!";
} else if (totalAura >= 1) {
    auraCategoryElement.innerText = "Chill Master 😎💯 You’ve got your own vibe going. You don’t rush, you don’t stress, you just go with the flow and make everything look easy. Whether it’s chilling with friends or handling problems, you keep it cool. Life's not a race for you, and that's what makes you a legend in the making!";
} else if (totalAura >= -3999) {
    auraCategoryElement.innerText = "Dost Ki Tarah Hai Tu 🤔⚡ You’re the type of person who always stays lowkey, but knows exactly when to jump in and make a mark. Sometimes you prefer to stay behind the scenes, letting others take the spotlight. But deep down, your mind works like a chessmaster, always thinking ahead.";
} else {
    auraCategoryElement.innerText = "Kaunsa Code Tera? 💀🌀 You’ve broken the system, and now it’s messing with you. Things don’t always go according to plan, but hey, you’re used to it. The universe is a glitch, and you’re just trying to figure it out. But don’t worry, you’ll bounce back stronger—because that’s what real ones do!";
}


    resultContainer.style.display = "block"; // Show the result container
}

// Start the quiz by showing the first question
showQuestion();


window.onload = function() {
    alert("scroll down! 👇 to use our tool ");
};

