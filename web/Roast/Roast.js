document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const output = document.getElementById("output");
    const tryAgainBtn = document.getElementById("tryAgainBtn");
    const generateBtn = form.querySelector('button[type="submit"]');
    let attempts = 0;

    // Function to generate the roast or compliment
    function generateResponse() {
        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value.trim());
        const passion = document.getElementById("passion").value.trim().toLowerCase();
        const work = document.getElementById("work").value.trim().toLowerCase();

        if (!name || isNaN(age) || !passion || !work) {
            return;
        }

        // Determine the age group
        let ageGroup = "";
        if (age >= 1 && age <= 10) {
            ageGroup = "1-10";
        } else if (age >= 11 && age <= 20) {
            ageGroup = "11-20";
        } else if (age >= 21 && age <= 30) {
            ageGroup = "21-30";
        } else if (age >= 31 && age <= 40) {
            ageGroup = "31-40";
        } else {
            ageGroup = "40+";
        }

        // Age group responses with Indian vibe
const data = {
    "1-10": {
        roast: [
            `😂 ${name}, at ${age}, your idea of hard work is probably trying to figure out how to open a packet of biscuits! 🍪🇮🇳`,
            `🤣 At ${age}, you think "gully cricket" is a full-on sport, don't you ${name}? 🏏`,
            `🔥 At ${age}, you're still trying to perfect your bhangra moves, huh ${name}? 🕺💃🎶`,
            `🎭 Hey ${name}, at ${age}, you think running is all about chasing the ice cream truck, right? 🍦⏳`,
            `⏳ ${name}, at ${age}, your biggest accomplishment is finishing an entire packet of Maggi without burning it! 🍜🔥`,
            `👶 ${name}, at ${age}, your biggest decision is whether to eat jalebi or samosa for breakfast! 😋🥯`,
            `🚀 At ${age}, you still think you can fly like Shaktimaan, huh? 💥🦸‍♂️`,
            `💥 Hey ${name}, at ${age}, your idea of an adventure is probably finishing your homework without your parents reminding you! 📚📝`,
            `💤 At ${age}, you’ve got more energy than a Diwali cracker, all set to burst out! 🎆🎇`,
            `🎮 ${name}, at ${age}, you still get lost in the local market like it's a maze! 🛍️🌶️`
        ],
        compliment: [
            `💡 Wow, ${name}, at just ${age}, you're already a mini Sachin Tendulkar in ${passion}, keep going! 🏆⚡`,
            `🌟 ${name}, at ${age}, you're already becoming a rockstar in ${passion}! Keep shining brighter than the sun! 🌞🎸`,
            `🔥 At ${age}, you're already a legend in the making, like a true Bollywood hero, ${name}! 🎬✨`,
            `🎯 At ${age}, you’ve got more wisdom than most people twice your age, ${name}! 🧠💥`,
            `📖 You might be young, ${name}, but your passion for ${passion} is already inspiring like a grand Bollywood story! 🎥🔥`,
            `🌈 ${name}, at ${age}, your energy lights up the room like a Diwali diya! 🪔🎆`,
            `💪 At ${age}, you’re stronger than you think, just like a perfect cup of masala chai! 🍵💥`,
            `🎉 At ${age}, you’ve got a spirit that can take on anything, like a true Indian warrior! 🛡️💫`,
            `🎤 Hey ${name}, at ${age}, you sing to the beat of your own tabla, and it’s amazing! 🥁🎶`,
            `🚀 At ${age}, you're already reaching for the stars, just like an astronaut in ISRO! 🌟🚀`
        ]
    },

    "11-20": {
        roast: [
            `😂 ${name}, at ${age}, you're still figuring out if chai is life or Maggi is your soulmate! ☕🍜❤️`,
            `🤣 At ${age}, your career aspirations are probably becoming a TikTok star or a Bollywood dancer! 💃🎬📱`,
            `🔥 At ${age}, you're still relying on your mom to teach you how to fold a kurta! 👕👚`,
            `🎭 ${name}, at ${age}, you act like you're a grown-up, but your playlist is all Bollywood remixes! 🎶🎧`,
            `⏳ At ${age}, you think you’re independent, but your bank account begs to differ, like a ₹10 note after a shopping spree! 💸💔`,
            `💀 ${name}, at ${age}, you're not lazy... you're just 'energy efficient', like a fan on low speed! 🌬️💤`,
            `😂 At ${age}, your future is bright, but right now it feels like a stuck "loading" bar! 📶⚡`,
            `🥲 At ${age}, you’re acting like an adult, but you still can't fold a fitted sheet without calling for backup! 🛏️💔`,
            `💼 ${name}, at ${age}, you're so 'ambitious' that even your alarm clock feels overwhelmed! ⏰😱`,
            `🎮 At ${age}, you’re so good at procrastination that your assignments are basically begging for mercy! 📚✋`
        ],
        compliment: [
            `💡 At ${age}, ${name}, you're already a force in ${work}! Keep making India proud! 🇮🇳🚀`,
            `🌟 You’ve got more ambition at ${age} than most people do in a lifetime, ${name}! 💪🌍`,
            `🔥 Your passion for ${passion} is incredible, ${name}, you're making waves just like Ganga! 🌊🌟`,
            `🎯 At ${age}, you're wise beyond your years, ${name}. Keep pushing the boundaries like a true Indian innovator! 💡🔧`,
            `📖 Your journey with ${work} at ${age} is just beginning, but it's going to be amazing, like a Bollywood blockbuster! 🎬✨`,
            `🌱 At ${age}, you’ve got the growth mindset that most people spend their whole life searching for, just like a farmer waiting for the monsoon! 🌾☔`,
            `💪 ${name}, at ${age}, you're already lifting your own weight, and others too, like a true desi champion! 🏋️‍♀️🇮🇳`,
            `💼 At ${age}, you’ve got the work ethic that most adults only dream of, ${name}! 💼💥`,
            `🚀 ${name}, at ${age}, you're not just following the path, you're creating new roads for others to walk, just like Swades! 🌍✨`,
            `💥 At ${age}, you’re crushing goals like it’s your full-time job, like a CEO in India! 💼🔥`
        ]
    },

    "21-30": {
        roast: [
            `😂 ${name}, at ${age}, you're still pretending to know what "adulting" is, just like a new recruit in a government job! 💼🤷‍♂️`,
            `🤣 At ${age}, you're still wondering where your 20s went while struggling to find your wallet in your bag! 👜💸`,
            `🔥 At ${age}, you still call your mom to figure out your taxes, huh? Like a true Indian kid! 📞💼`,
            `🎭 You think you're a boss at ${age}, but your morning tea says otherwise, ${name}! ☕🥱`,
            `⏳ At ${age}, you're at the age where "sleeping in" is a distant memory! Just like the good old days of a late-night chai party! 🍵🌙`,
            `💀 At ${age}, you’ve officially reached the age where your back hurts just from breathing too hard after eating samosas! 🥴💥`,
            `🤣 At ${age}, your "wild" party nights are now just binge-watching Netflix with your slippers on, and it’s okay! 🎉🍿`,
            `🔑 At ${age}, you still haven't figured out how to open a jar without asking for help, just like a child trying to open pickle jars! 🥒💪`,
            `☕ At ${age}, you’re starting to realize coffee is the only thing keeping you from becoming a human zombie, just like that filter coffee! ☕💥`,
            `🥴 At ${age}, your most exciting weekend plan is now just making it to brunch without needing a nap first, like a true millennial! 🛏️🍽️`
        ],
        compliment: [
            `💡 At ${age}, ${name}, your career in ${work} is just getting started! You're going places, like a tech startup in Bengaluru! 💻🚀`,
            `🌟 At ${age}, you're already making a huge impact in ${passion}, ${name}! Just like a Bollywood star on the rise! 🎬🌟`,
            `🔥 Your dedication to ${work} at ${age} is unmatched, keep crushing it, ${name}! 💪📈`,
            `🎯 You've got a bright future ahead, ${name}, especially in ${passion}! Like a cricketer aiming for the World Cup! 🏆🏏`,
            `📖 At ${age}, you're thriving in ${work}, and it's amazing to watch, ${name}! Just like a new chapter in the Bhagavad Gita! 📖✨`,
            `🌱 At ${age}, you’re growing faster than a plant in the sun, ${name}, and it’s inspiring! 🌱🌞`,
            `💪 At ${age}, you're handling life like a champ, juggling ${work} and ${passion} like a pro! 🏋️‍♂️🎯`,
            `🎉 You're not just getting older at ${age}, you're getting better at everything you do, like a fine dosa batter! 🥞✨`,
            `⚡ Your energy and drive at ${age} make everyone around you want to step up their game, ${name}! ⚡💥`,
            `🎓 At ${age}, you're already a seasoned expert in ${work}, but it’s just the beginning, ${name}! 📚🌟`
        ]
    },

    "31-40": {
        roast: [
            `😂 ${name}, at ${age}, you're still trying to figure out how to use Snapchat, like a confused auntie at a wedding! 🤳💃`,
            `🤣 At ${age}, you're like that aunty who still wears sarees to casual hangouts! 🪡👗`,
            `🔥 At ${age}, you’ve become a walking Google search for 'how to survive adulthood'! 🔍🥱`,
            `🎭 At ${age}, your mid-life crisis is probably just deciding between a new TV or a vacation! 📺✈️`,
            `⏳ At ${age}, you’ve crossed the age where you can stay up all night and feel fresh! Now it’s all about binge-watching Netflix and naps! 🍿🛏️`,
            `💀 At ${age}, your joints are more cracked than the samosa you tried to fry last week! 🥴🍽️`,
            `🤣 At ${age}, you’ve realized that weekend plans mean grocery shopping and looking for discounts! 🛒💰`,
            `🔑 At ${age}, you’re the one still searching for the car keys like it’s a treasure hunt! 🚗🗝️`,
            `☕ At ${age}, you think coffee is the only thing that can hold your life together, and that’s okay! ☕💥`,
            `🥴 At ${age}, you feel like you need a power nap just to take a power nap! 💺💤`
        ],
        compliment: [
            `💡 At ${age}, ${name}, your wisdom in ${work} is already outpacing the competition! You’re the guru now! 📚✨`,
            `🌟 You’ve got more grace in ${work} than most people ever will, ${name}! You’re like a Bollywood diva! 🎬✨`,
            `🔥 Your experience in ${work} is unmatched, ${name}, you're leading the way, just like a lion in the wild! 🦁🌍`,
            `🎯 At ${age}, you’re already a mentor in ${work}, guiding the younger generation to success! 💼💪`,
            `📖 Your achievements in ${work} at ${age} are like the Bhagavad Gita—timeless and inspiring! 🕉️📚`,
            `🌱 At ${age}, you’ve blossomed into the kind of leader people look up to, like a tree with deep roots! 🌳💥`,
            `💪 At ${age}, you're managing ${work} like a true warrior, with the heart of a lion and the mind of a strategist! 🦁📊`,
            `🎉 At ${age}, you're like a fine wine—only getting better with age, like a perfect biryani! 🍷🍛`,
            `⚡ Your energy is contagious, ${name}, you keep everyone around you motivated, like a spark that lights up the whole room! ⚡💥`,
            `🎓 At ${age}, you’ve reached a new milestone in ${work}, and it’s just the beginning of even bigger successes! 🎓📈`
        ]
    },

    "40+": {
        roast: [
            `😂 ${name}, at ${age}, you're still trying to figure out how to set up the WiFi like it's an ancient puzzle! 🖥️💔`,
            `🤣 At ${age}, you're like that uncle who still uses an old Nokia phone to send SMSs, huh? 📱💬`,
            `🔥 At ${age}, you’re officially a walking "back in my day" machine, with stories about the 'good old days' of VHS tapes! 🎥📼`,
            `🎭 At ${age}, your idea of "wild" is a night watching KBC while sipping warm milk! 🍶📺`,
            `⏳ At ${age}, you’ve crossed the age where even a few stairs feel like a trek to the Himalayas! 🏔️🚶‍♂️`,
            `💀 At ${age}, your bones make more noise than a masala dosa being served in the morning! 🥴🥞`,
            `🤣 At ${age}, your wild party nights are now just watching cricket highlights and complaining about the "new generation." 🏏📺`,
            `🔑 At ${age}, you still can’t find your glasses, and you’ve had them on your head for the last 20 minutes! 👓💥`,
            `☕ At ${age}, you think the only thing keeping you alive is a cup of chai and some good gossip! ☕👵`,
            `🥴 At ${age}, you’ve realized that napping after lunch is a luxury you’ve earned, not a choice! 🛏️💤`
        ],
        compliment: [
            `💡 At ${age}, ${name}, you're the voice of reason in your family and community! Your wisdom is like a priceless artifact. 🏆📚`,
            `🌟 You’re like a fine vintage wine, ${name}, only getting better with age, and you’re still rocking ${work} like a pro! 🍷⚡`,
            `🔥 At ${age}, you’ve built more in your career than most people dream of in a lifetime. You're a true pioneer in ${work}! 💼🚀`,
            `🎯 You’ve reached a level in ${work} where you’re the mentor now, and everyone looks up to you like a true guru! 📖🌍`,
            `📖 Your experience and knowledge in ${work} are unmatched, ${name}, you’re like an open book of wisdom! 📚✨`,
            `🌱 At ${age}, you’ve been through life’s ups and downs and come out stronger than ever, like a tree with deep roots. 🌳💪`,
            `💪 At ${age}, you handle everything with the grace of a Bollywood legend, balancing family, work, and everything in between! 🎬💥`,
            `🎉 You’ve seen it all, and you're still going strong! Your energy is like a never-ending festival, just like Diwali! 🎆🎇`,
            `⚡ Your wisdom, experience, and vitality are like a well-brewed masala chai—spicy, strong, and forever energizing! ☕🔥`,
            `🎓 At ${age}, you're still reaching new heights, breaking barriers, and redefining what it means to be successful in ${work}! 🚀📈`
        ]
    },
};
``

// Choose a roast or compliment
const type = Math.random() < 0.9 ? "roast" : "compliment";
const response = data[ageGroup][type][Math.floor(Math.random() * data[ageGroup][type].length)];

output.innerHTML = `
    <h3>Let's See What You Got Today 🤞:</h3>
    <p>${response}</p>
`;
attempts++;

// Toggle visibility of the try again button
tryAgainBtn.style.display = "block";
generateBtn.style.display = "none";
}

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    generateResponse();
});

// Try again button
tryAgainBtn.addEventListener("click", () => {
    if (attempts < 5) {
        // Generate a new roast or compliment
        generateResponse();
    } else {
        // After 5 attempts, display the "try again by refreshing" message
        output.innerHTML = "<h3>You've hit your limit! Maybe today just isn't your lucky day...But try again by refreshing the page. You never know ! 🍀🤞💔</h3>";
        tryAgainBtn.style.display = "none"; // Hide the button after 5 tries
    }
});
});
