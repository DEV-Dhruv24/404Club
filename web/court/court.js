const allegations = [
    {
        text: "Said 'Bro, I haven’t studied at all' but secretly studied all night! 📚",
        rounds: [
            {
                question: "Lawyer : You lied about studying all night! Do you deny it? 🤔",
                options: [
                    { text: "I just revised a little! 😅", lawyer: "Lawyer :Then why were you up till 4 AM? 😳" },
                    { text: "I was solving only one chapter! 📖", lawyer: "Lawyer :Then why did you complete the entire syllabus? 📚" },
                    { text: "I didn’t want to pressure my friends! 😬", lawyer: "Lawyer :So you manipulated them instead? Villain move! 😈" }
                ]
            },
            {
                question: "Lawyer :Your friends suffered while you got ahead. Defend yourself! 🥺",
                options: [
                    { text: "I didn’t even get full marks! 😓", lawyer: "Lawyer :That’s like a thief saying 'I didn’t steal much!' 🕵️" },
                    { text: "My friends should’ve studied too! 📚", lawyer: "Lawyer :Blaming the victims now, huh? 😡" },
                    { text: "It’s not my fault they trusted me! 🙄", lawyer: "Lawyer :That’s what a scammer says! 🕵️‍♂️" }
                ]
            },
            {
                question: "Lawyer :Your friends are now calling you a 'study machine'! How do you explain that? 💪",
                options: [
                    { text: "I just helped them when they asked! 🤝", lawyer: "Lawyer :Ah, so you're the 'silent hero' now? 🦸‍♂️" },
                    { text: "I didn’t know they’d rely on me so much! 😅", lawyer: "Lawyer :But you didn’t stop them either, did you? 🤨" },
                    { text: "They should’ve been more proactive! 🙄", lawyer: "Lawyer :Are you deflecting the blame?! 😤" }
                ]
            },
            {
                question: "Lawyer :Do you feel guilty about what you did to your friends? 😔",
                options: [
                    { text: "Not really, they didn’t ask for help! 😕", lawyer: "Lawyer :You knew they were struggling, yet chose to act like nothing was wrong? 😟" },
                    { text: "I regret nothing! I did what I had to do! 😎", lawyer: "Lawyer :So you're saying it's all about you? What about your friends? 🤨" },
                    { text: "I do feel bad, but it's too late now! 😞", lawyer: "Lawyer :Exactly! It’s always too late when the damage is done! ⏳" }
                ]
            },
            {
                question: "Lawyer :If you had the chance to go back, would you change anything? 🔄",
                options: [
                    { text: "Maybe not lie so much, but I’d still study! 📚", lawyer: "Lawyer :A little honesty wouldn’t hurt, huh? 😏" },
                    { text: "Nope, I’d do it all over again! 🤷‍♂️", lawyer: "Lawyer :So, you're a repeat offender then! 👮‍♂️" },
                    { text: "I’d probably help my friends more honestly next time! 🤝", lawyer: "Lawyer :Too little, too late! ⏳" }
                ]
            }
        ],
        punishment: [
            "Your punishment is to organize a surprise study group session for the class and bring snacks for everyone during the next exam prep! 🍕📖 Along with preparing a 3-hour study marathon for the entire class! ⏳📚 You’ll also be responsible for leading the review session and providing all the materials! 🎤📑 Afterward, keep everyone awake with caffeine and snacks during the next late-night study session! ☕🍪 Lastly, you must give an impromptu lecture on your biggest mistakes and how to avoid them! 🎓🤦‍♂️"
        ]
        },
    

    {
        text: "Lawyer : Copied in an exam but still failed! 📚😱",
        rounds: [
            {
                question: "Lawyer :You cheated but still failed! What’s your excuse? 🤔",
                options: [
                    { text: "The invigilator caught me!", lawyer: "Lawyer :Then why did you try it at all? 🚫" },
                    { text: "I copied wrong answers!", lawyer: "Lawyer :So you're a dumb criminal now? 🤦‍♂️" },
                    { text: "I just peeked once!", lawyer: "Lawyer :Once is all it takes to break the law! ⚖️" }
                ]
            },
            {
                question: "Lawyer :Your exam paper has exact words from someone else’s paper! 😳",
                options: [
                    { text: "It was a coincidence!", lawyer: "Lawyer :Coincidence or plagiarism? 🤔" },
                    { text: "I just glanced a little!", lawyer: "Lawyer :Glancing = Cheating! 🕵️‍♂️" },
                    { text: "Fine, I cheated. But I regret it!", lawyer: "Lawyer :Regret doesn’t erase the crime! ⛓️" }
                ]
            },
            {
                question: "Lawyer :You failed despite copying! How do you explain that? 😤",
                options: [
                    { text: "I copied from the wrong person!", lawyer: "Lawyer :Wrong person or wrong decision? 🤷‍♂️" },
                    { text: "I didn’t have time to study properly!", lawyer: "Lawyer :Time management is your crime now! ⏳" },
                    { text: "I panicked during the exam!", lawyer: "Lawyer :Panicking doesn't save you from failure! 🚨" }
                ]
            },
            {
                question: "Lawyer :You failed despite copying, is this part of your strategy? 💡",
                options: [
                    { text: "I thought I could guess it!", lawyer: "Lawyer :Guessing doesn’t work in a real exam! 🎯" },
                    { text: "I didn’t study enough!", lawyer: "Lawyer :So you cheat when you don’t study? 📝" },
                    { text: "I didn’t have confidence!", lawyer: "Lawyer :Confidence would have been more useful than cheating! 💪" }
                ]
            },
            {
                question: "Lawyer :You failed the exam after copying. What’s your defense now? 🧐",
                options: [
                    { text: "It was just one exam!", lawyer: "Lawyer :It’s a pattern, not an exception! 🧠" },
                    { text: "I didn’t deserve to fail!", lawyer: "Lawyer :You deserve a reality check! ⚡" },
                    { text: "I wasn’t the only one who copied!", lawyer: "Lawyer :Everyone copying doesn’t make it right! 🔒" }
                ]
            }
        ],
        punishment: [
            "You are now sentenced to a brutal series of consequences of 📚🚫 No borrowing notes for one semester, 📖📝 Teach 3 topics before every test, ⏰💀 Endure extra-long study sessions every weekend, 📵🕰️ Your phone will be locked away for a month during study time, and 🎤👨‍🏫 You must prepare 5-minute lectures on your mistakes for the entire class!"
        ]
    },
    {
        text: "Lawyer : Argued with the autorickshaw driver for ₹10, then spent ₹200 on coffee! 🚖☕",
        rounds: [
            {
                question: "Lawyer :Why did you fight over ₹10 but waste ₹200?",
                options: [
                    { text: "Auto rates are unfair!", lawyer: "Lawyer :But coffee prices aren’t? 🤔" },
                    { text: "I just like expensive coffee!", lawyer: "Lawyer :And yet, you fought for ₹10? 😒" },
                    { text: "It’s about principle!", lawyer: "Lawyer :Principle only when it benefits you? 🤨" }
                ]
            },
            {
                question: "Lawyer :Drivers work hard. Don’t they deserve fair pay?",
                options: [
                    { text: "They charge too much!", lawyer: "Lawyer :And coffee shops don’t? 😅" },
                    { text: "I didn’t think about it!", lawyer: "Lawyer :Ignorance is no excuse! 🚫" },
                    { text: "Fine, I was being unfair!", lawyer: "Lawyer :Justice prevails! ⚖️" }
                ]
            },
            {
                question: "Lawyer :You spent ₹200 on coffee, but ₹10 could've solved the issue with the driver. Explain.",
                options: [
                    { text: "Coffee is a necessity!", lawyer: "Lawyer :Necessity? Or luxury? 🤨" },
                    { text: "I needed a break, okay!", lawyer: "Lawyer :You needed a break more than fairness? 🤷‍♂️" },
                    { text: "It wasn’t about the money, it was the principle!", lawyer: "Lawyer :Principle over ₹10 but not ₹200? 😤" }
                ]
            },
            {
                question: "Lawyer :Would you have argued if you were in the driver’s shoes?",
                options: [
                    { text: "Maybe, but drivers are rude sometimes!", lawyer: "Lawyer :And so are you when it comes to ₹10! 😡" },
                    { text: "I would’ve charged him more!", lawyer: "Lawyer :That’s called greed, not justice! 💸" },
                    { text: "I understand now. It wasn’t right.", lawyer: "Lawyer :Awareness at last, but too late! ⏳" }
                ]
            },
            {
                question: "Lawyer :If you had a chance to go back, would you still fight for ₹10?",
                options: [
                    { text: "I would’ve handled it differently.", lawyer: "Lawyer :A wise choice, but the damage is done. ⚠️" },
                    { text: "I regret fighting, but the price was too high.", lawyer: "Lawyer :Regret comes after the crime, huh? 🤔" },
                    { text: "Honestly, I would still argue!", lawyer: "Lawyer :Then you haven't learned a thing! 😤" }
                ]
            }
        ],
        punishment: [
            "Your punishment is No negotiating with autos for a week 🚫, and for each auto ride you take, you must tip ₹10 at least once. 💸 If you break this rule, prepare for a week without coffee ☕️ or a ₹200 fine to a driver’s charity 🚖. Alternatively, you could be banned from coffee shops for a week 🛑, and every auto ride from now on will require a ₹10 tip. 😡"
        ]
        
    },
    
    {
        text: "Lawyer : Drank chai worth ₹5 at a tapri but sat there for 2 hours! 🍵⏳",
        rounds: [
            {
                question: "Lawyer :You occupied space for hours! How do you plead? 🤔",
                options: [
                    { text: "I was just chilling! 😌", lawyer: "Lawyer :For 2 HOURS on ₹5 chai?" },
                    { text: "The owner didn’t say anything! 🤷‍♂️", lawyer: "Lawyer :Doesn’t mean it’s okay!" },
                    { text: "I didn’t realize the time! 🕒", lawyer: "Lawyer :Ignorance is not a defense!" }
                ]
            },
            {
                question: "Lawyer :Small vendors depend on quick customers. Your response? 🛵💨",
                options: [
                    { text: "I’ll buy something next time! 🛍️", lawyer: "Lawyer :You better!" },
                    { text: "I didn’t mean harm! 🙈", lawyer: "Lawyer :Yet harm was done!" },
                    { text: "Fine, I was in the wrong! ✔️", lawyer: "Lawyer :Justice is served!" }
                ]
            },
            {
                question: "Lawyer :Do you believe it’s right to occupy space for hours without ordering more? 💭",
                options: [
                    { text: "I didn’t think it was a big deal! 🤷‍♀️", lawyer: "Lawyer :That’s what they all say!" },
                    { text: "It's just ₹5 chai, it’s not hurting anyone! 🙄", lawyer: "Lawyer :You’re hurting the chaiwala's business!" },
                    { text: "I didn’t know they were losing money! 💸", lawyer: "Lawyer :Now you do!" }
                ]
            },
            {
                question: "Lawyer :Other customers were waiting. How would you justify your actions? ⏳👀",
                options: [
                    { text: "I was enjoying my chai! ☕️😋", lawyer: "Lawyer :But at the expense of others!" },
                    { text: "There was no rush when I arrived! 🚶‍♂️", lawyer: "Lawyer :That’s not an excuse!" },
                    { text: "I’ll make it up to them next time! 🤞", lawyer: "Lawyer :That's just a lazy excuse!" }
                ]
            },
            {
                question: "Lawyer :Do you think it's fair to take up space while not contributing to the business? 🤨",
                options: [
                    { text: "I’ll be more considerate next time! 🙏", lawyer: "Lawyer :I hope so, or you’ll face harsher consequences!" },
                    { text: "I wasn’t really thinking about it! 😔", lawyer: "Lawyer :Not thinking leads to mistakes!" },
                    { text: "It wasn’t my intention to harm anyone! 💔", lawyer: "Lawyer :But harm was still done!" }
                ]
            }
        ],
        punishment: [
            "Your punishment is as follows: First, buy an extra chai for the chaiwala and say 'This is my rent!' 🍵💸. Then, for the next 3 hours, clean the tapri while listening to the chaiwala’s endless complaints. 🧼😓. After that, you'll be banned from this tapri and all others within a 5 km radius for 7 days! 🚫🍵. On top of that, you must share a story of your actions with all other customers, warning them against your behavior. 📢👀. Finally, to make up for your wrongs, you’ll pay for 10 chais for the others in line, paying your dues to the chaiwala community! 💵👥"
        ]
        
    }
    
    
];


let currentRound = 0;
let guiltyPoints = 0;
let isFinished = false;

let selectedAllegation; // Declare it here so it can be reassigned later.

const allegationText = document.getElementById("allegation-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const verdictText = document.getElementById("verdict");
const feedbackText = document.getElementById("feedback");  // Feedback element
const anotherAllegationButton = document.getElementById("another-allegation-btn"); // New button for another allegation

// Sample feedback array
const feedbackMessages = {
    good: [
        "Great choice! Your lawyer seems confident!",
        "That's a smart move, you’re on the right track.",
        "Well done! This lawyer could make a big difference.",
    ],
    neutral: [
        "Let's see how this plays out...",
        "An interesting choice, but it could go either way.",
        "This could go either way. Time will tell.",
    ],
    bad: [
        "This might backfire... be careful.",
        "A risky move! Let’s hope it pays off.",
        "This decision doesn’t seem to favor you. Watch out!",
    ],
};

function getFeedback(decisionQuality) {
    // Return random feedback based on decision quality
    const feedbackArray = feedbackMessages[decisionQuality];
    return feedbackArray[Math.floor(Math.random() * feedbackArray.length)];
}

function showAllegation() {
    selectedAllegation = allegations[Math.floor(Math.random() * allegations.length)]; // Choose a random allegation
    allegationText.innerText = selectedAllegation.text;
    nextButton.innerText = "Start"; // Change button text to "Start"
    nextButton.style.display = "block";
    optionsContainer.innerHTML = "";
    feedbackText.innerText = ""; // Clear any previous feedback
    feedbackText.style.display = "block"; // Ensure feedback is visible at the start
    anotherAllegationButton.style.display = "none"; // Hide the "Go to another allegation" button initially
}

function loadRound() {
    if (currentRound >= selectedAllegation.rounds.length) {
        calculateVerdict();
        return;
    }

    const round = selectedAllegation.rounds[currentRound];
    allegationText.innerText = round.question;
    optionsContainer.innerHTML = "";
    feedbackText.innerText = ""; // Clear any previous feedback

    round.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.onclick = () => {
            // Add guilt points based on a random factor
            guiltyPoints += Math.random() * 40 + 20; // Adds 60-100 guilt points

            // Assign feedback based on the decision (good, neutral, bad)
            let feedbackQuality = 'neutral';
            if (option.isGood) feedbackQuality = 'good';  // Set decision quality (good, neutral, bad)
            else if (option.isBad) feedbackQuality = 'bad';

            feedbackText.innerText = getFeedback(feedbackQuality); // Display feedback

            allegationText.innerText = "⚖️ Lawyer: " + option.lawyer;
            optionsContainer.innerHTML = "";
            nextButton.style.display = "block";
        };
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

function calculateVerdict() {
    let judgeMood = 60; // Fixed judge bias
    let guiltChance = guiltyPoints + judgeMood;

    verdictText.style.display = "block";
    nextButton.style.display = "none";
    optionsContainer.innerHTML = "";

    // Hide feedback before showing the verdict
    feedbackText.style.display = "none";  // Hide feedback when verdict is displayed

    if (Math.random() * 100 < 1) {
        verdictText.innerText = "🌟 NOT GUILTY! You somehow escaped justice!";
    } else {
        verdictText.innerText = "🔥 YOU ARE GUILTY! NOW " + selectedAllegation.punishment;
    }

    // After verdict, show "Go to another allegation" button
    setTimeout(() => {
        anotherAllegationButton.style.display = "block";  // Show the "Go to another allegation" button
        isFinished = true;
    }, 1000);
}

nextButton.onclick = () => {
    if (isFinished) {
        // If it's finished, ask user if they want to go to another allegation
        anotherAllegationButton.style.display = "block"; // Make sure it's visible
    } else if (currentRound === 1) {
        currentRound++;  // First time the button is clicked, load rounds
        loadRound();
        nextButton.innerText = "Next"; // Change button text back to "Next"
    } else {
        currentRound++;
        loadRound();
    }
};

// When the user clicks "Go to another allegation", reset everything and show a new random allegation
anotherAllegationButton.onclick = () => {
    isFinished = false;
    currentRound = 0;
    guiltyPoints = 0;
    verdictText.style.display = "none";
    showAllegation();  // Show the next random allegation
};

// Initially show the first allegation
showAllegation(); 
