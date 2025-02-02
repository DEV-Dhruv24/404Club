document.getElementById('email-form').addEventListener('submit', generateEmail);

function generateEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const collegeName = document.getElementById('college-name').value.trim();
    const professorName = document.getElementById('professor-name').value.trim();
    const emailType = document.getElementById('email-type').value;
    const tone = document.getElementById('tone').value;

    document.getElementById('email-form').addEventListener('submit', generateEmail);

    //email templates 
    const emails = {
        feedback: {
            sarcastic: `Subject: Feedback on Your Class – Truly Unforgettable 🌟

Dear Professor ${professorName},

I hope you're doing well! Just wanted to share my thoughts on your class—what an experience! 😅 Every lecture feels like a thrilling rollercoaster of discovery. 🎢 Your passion and energy are truly a masterpiece. 😌

Your feedback was mind-blowing 🧠. Every point left me thinking for hours (okay, maybe days). 🌀 It's like you've cracked the code to making everything groundbreaking. 🤯

Honestly, your lectures could be TED Talks. 🔥 I’m not sure how to concentrate with all that contagious energy! ⚡ But in all seriousness, you’ve inspired me. Each class is an adventure, and I can’t wait for more. 📚

Thanks for the unforgettable experience! 💡

Best,
${name}`,


dramatic: `
Subject: A Heartfelt Journey Through Your Class 🌪️

Dearest Professor ${professorName},

I write to you with a heart full of gratitude. 🌟 Every lecture felt like a story, igniting curiosity in me. 🔥 As the semester ends, I feel a sense of longing 😔—how will I manage without your insights? 💭

You’ve taught me that learning is about understanding and questioning everything 🧠. Your passion has shaped my outlook on life 🌱. Every lesson pushed me to seek deeper truths 💡.

Thank you for being more than a professor—you're a mentor and inspiration. 💖 Your class will remain the highlight of my academic journey.

With gratitude,
${name} 🌟`,



formal: `
Subject: Feedback and Suggestions for Enhancement 📚✨

Dear Professor ${professorName},

I hope you're well! 🌟 First, thank you for your dedication to our learning. Your clarity and engaging teaching style have made a big impact on my understanding. 💡

I have a few suggestions that could enhance our learning further. Interactive elements like discussions or case studies would apply what we’ve learned in real-world contexts 🤝. Also, supplementary resources like quizzes or videos could reinforce concepts. 📖

I appreciate your hard work and look forward to the rest of the course. 🌟

Warm regards,
${name}

`,


lazy: `
Subject: Thoughts on the Class... 😅

Hey ${professorName},

Hope you're doing well! So, about the class… it’s been alright—nothing terrible, but also nothing super exciting. 😅 Honestly, this semester has been a lot, and my brain feels like it's running on overdrive. It’s kinda tough keeping up with everything, and sometimes it feels like I’m just absorbing info without really knowing what to focus on. 😵‍💫

I totally get that not every class can be a thrilling adventure, but I guess I was hoping for something to break up the routine a little—maybe an interactive activity or something to make it feel more engaging. Right now, it's just a lot of information back-to-back, and with everything else going on, it's hard to stay locked in. 🤯

That said, I appreciate all the effort you put into teaching! I think I just need a break (and probably a nap 😴). This semester has been a grind, and I know I’m not the only one feeling it. Anyway, just wanted to share my thoughts. Hopefully, I can catch up and bring a little more energy to class soon!

Thanks for everything! See you in class. 🙌

Best,
${name}`,


Extrem: 
`Subject: Immense Gratitude for Your Incredible Teaching 🌟

Dear Professor ${professorName},

I just wanted to say THANK YOU for the amazing experience that is your class! 🙏✨ Every lecture feels like a journey, and your clarity and passion inspire me to think deeper and work harder. 💡📚

Your energy is contagious, and it pushes me to truly love learning. 🚀🙌 I’ve never felt so engaged in a subject before! Your support and encouragement mean the world. 🌟

I’m lucky to be your student and can’t wait for more! 🤩🎉

Warmest regards,
${name}`
},

absence: {
        sarcastic: 
`Subject: A Shocking Revelation—My Absence! 😱

Dear ${professorName},

Brace yourself—I won’t be in class today. Shocking, I know! But don’t panic, I have complete faith that you’ll manage without my brilliant insights. 😂

Now, before you assume I’m off on a spontaneous vacation to Bora Bora (I wish 😎), let’s just say today felt like a pause button kind of day. Life happens, you know? Sometimes, the universe whispers, “Stay in bed,” and who am I to argue? 🛏️✨

But hey, you’ve got this! I’m sure class will go smoothly, even without my radiant presence. If anything major happens, I’ll catch up (probably when I finally conquer my procrastination demons 😅).

Think of this as a rare moment for you all to appreciate my usual attendance. You’re welcome. 🙌 Don’t miss me too much—I’ll be back, hopefully recharged, or at least pretending to be. 😏

Until then, have a fantastic class! 🚀

Best,
${name}

`,

dramatic: 
`Subject: A Heartbreaking Absence from Class Today 😢💔

Dear Professor ${professorName},

I regret to inform you that I am unable to attend class today. 💔 Missing your lecture feels like losing a piece of my academic spirit. 😞

I had looked forward to being present and absorbing your insights, but circumstances have sadly kept me away. 😩 It’s more than just a missed lecture—it’s a loss of inspiration. 🌪️

Please know that this absence is beyond my control, and I am deeply disappointed. 😓 I will do my best to catch up on what I missed, though nothing can replace the experience of being in class. 💭

With sincere regret,
${name} 😞💔
`,

formal:
`Subject: Apologies for Absence – Request for Updates

Dear Professor ${professorName},

I hope you’re doing well! 😊 Unfortunately, due to unforeseen circumstances, I won’t be able to attend class today. I truly regret missing it and apologize for any inconvenience. 🙏

I’ll make sure to catch up by reviewing the materials and staying on top of assignments. If there are any lecture notes, slides, or key updates from today’s session, I’d really appreciate it if you could share them. 📝📖

If there are group discussions or collaborative tasks, I’ll coordinate with my classmates to stay involved. 🤝 I want to ensure my absence doesn’t affect my progress or contributions to the class. 🚀

Thank you for your time and understanding! Looking forward to being back and continuing to learn. 🌟

Best regards,
${name}`,


lazy: 
`Subject: Taking a Recharge Day 😴

Yo ${professorName},

Hope you’re doing great! Just wanted to give you a heads-up—I won’t be making it to class today. Honestly, I’m just exhausted. You know those days when your bed feels like it has its own gravitational pull? Yeah, that’s me right now. 😩

I know skipping class isn’t ideal, and I promise I’m not turning into a full-time napper (though that does sound tempting 😆). But today, I just need a reset—some extra sleep, maybe a show or two, and pretending like I’ve got my life together. 📺😜

I’ll definitely catch up on what I miss (eventually… don’t hold your breath 😂). If anything major comes up, feel free to send it my way. I will get to it—just maybe not at lightning speed. 🙃

Anyway, I appreciate the understanding! I’ll be back in action soon, refreshed and ready to pretend I know what’s going on in class. 😅

Catch you later!
Cheers,
${name}

P.S. Not gonna lie, professional napping does sound like a solid career choice. 🤔😂`,

Extrem: 
`Subject: Missing Class Today 😭

Dear Professor ${professorName},

I regret to inform you that I can’t make it to class today. Missing your lectures feels like losing the highlight of my day. 😩 Honestly, I’d rather be there learning and laughing at your genius jokes than doing anything else. Your class is the one thing that keeps me going!

I’ll catch up on everything, though—I’m determined to do my best (even if I’ll probably be pretending to be in class, channeling your energy while I take notes from home). 😂📚

Thanks so much for being such an incredible professor. I truly appreciate everything you do, and I can’t wait to be back in class, soaking up all that wisdom and wit! 🚀

Best,
${name}`
        },

assignment: {
            
    
sarcastic: 
`Subject: The Mystery of My Missing Assignment 🕵️‍♂️

Dear Professor ${professorName},

I’m sure you've been on the edge of your seat, wondering where my assignment is. 🤔 Spoiler alert: Life happened. Between pondering life’s mysteries (aka binge-watching YouTube 📺) and some vital fridge cleaning 🧼, my assignment got lost in the chaos.

But don’t worry! It’s on its way, maybe before you finish reading this—or maybe not. 😏

I apologize for missing the deadline, but when you get my work, you’ll be either impressed or amused by my last-minute brilliance. ✨

Thanks for your patience, and I promise, no eye rolls. 😜

Best,
${name}`,


dramatic:
`Subject: A Desperate Plea for Mercy and an Extension 🙏😩

Dear Professor ${professorName},

I write with a heavy heart, as my assignment remains unfinished, mocking me like an unachievable dream. 😭💔 Despite my good intentions, time slipped away like sand through my fingers. ⏳💭

Please, I beg you—extend your mercy. 🙇‍♂️ Grant me a little more time, and I’ll complete the assignment with a renewed dedication! 🎓⚔️

With deepest regret,
${name}

P.S. If you deny this request, a poetic tear may fall... 🙏`,

formal: 
` Subject: Request for Extension on Assignment Submission

Dear ${professorName},

I hope you’re well! I’m writing to request an extension for my assignment. Despite my best efforts, I’ve found myself in a time crunch due to unexpected commitments. ⚡

I fully respect deadlines, but given my current situation, I’d appreciate a bit more time to submit my best work. I’m committed to delivering a polished assignment! 🎨✨

Thank you for considering this request.
Best,
${name} 😄`,


lazy:
`Subject: Assignment Update 😅

Hey ${professorName},

So, about that assignment... Yeah, I didn’t get to it. 😅 Life got in the way, and suddenly, I’m behind. Classic, right? 😬

I’m not making excuses, but let’s be real: things got chaotic. If you could grant me a little more time, that’d be awesome! I’ll get it done when life gives me a break. 🏃‍♂️

Thanks for understanding.
Cheers,
${name}

`,

Extrem: 
`Subject: Request for Extension 🙏💔

Dear Professor ${professorName},

I hope you’re doing great! First, I just want to say you’re amazing. 📚✨ Unfortunately, I missed the assignment deadline. Life threw some unexpected curveballs my way, and here I am, humbly requesting your understanding. 😅

If you could grant me an extension, I promise to make this assignment my top priority and submit the best work I can! 💪

Thank you so much for considering this request.
Best regards,
${name}

P.S. You truly deserve a trophy for your patience. 🏆🎉`
},

grade:{


sarcastic:
`Dear ${professorName},

What a surprise to see my grade! 😏 I was expecting perfection, but I guess I was too optimistic! 🤔 Who needs perfect grades anyway? It’s not like they affect my future or self-esteem... 🙃

I’m sure grading mine was the highlight of your week. 🍰 The class probably cheered when they saw it. 🎉

Don’t get me wrong, I’m thrilled with it. All that studying must’ve paid off... in the middle! 🥴 It’s like the universe is saying, “You’re doing just fine—right where everyone else is.” ⭐

While I won’t lose sleep, I’ll take it as character-building. More room for improvement, right? 🙈 Still, a little more self-satisfaction would’ve been nice. But hey, I’m not keeping track! 🤷‍♂️

Thanks, ${professorName}, for reminding me I’ve earned my place in this academic landscape. 🎯 More grade points mean more responsibility, and I’m not ready for that yet. 😜 I’ll just breathe and move on. 💪

Thanks again for the learning opportunity. I’ll cherish this grade as I move on to conquer... whatever’s next. 🤩

Best,
${name}`,

dramatic:
`Subject: A Humble Request for Guidance

Dear ${professorName},

The grade I received has left me shocked and confused ⚡. I thought I gave my best, but something went wrong. My mind is racing, trying to figure out where I faltered. 😞

I’ve been replaying the assignment in my mind, feeling lost and unsure. But I won’t let this setback define me ✊. I’m determined to learn and grow from this experience. 🔥

Could you provide feedback so I can understand where things went wrong and avoid repeating it? I’d really appreciate it. 🙏

Awaiting your response,
Yours in earnest regret,
${name}


`,


formal: 
`Subject: Request for Feedback on My Recent Assessment Grade 📊

Dear Professor ${professorName},

I hope you're well! 😊 I’m reaching out about my recent assessment grade. After reviewing it, I feel there might be a misunderstanding between my approach and the final score. 🌌

If possible, could you provide feedback on where I went off track? I’m eager to improve and excel. 📅🌱

Thank you for your time and effort! I truly appreciate it. 🥘

Warm regards,
${name}
P.S. I appreciate everything you do for us! 🌟`,


lazy: 
`Subject: About That Grade... 🙃

Hey ${professorName},

I just saw my grade, and let’s just say... it wasn’t the “wow” moment I had in mind. 😂 Not the end of the world, though. I’m sure it’s just a small bump on the road to greatness. 😎

Honestly, I’m not stressing about it. Who hasn’t hit a little speed bump? Like, "Oh, that grade? No biggie!" 🤷‍♂️ I'll get to it... eventually. But, you know, Netflix, snacks, and my bed are calling my name. 😴

I’m not in panic mode—just chillin'. Life’s busy, grades aren’t going anywhere, right? 😏 I’ll dive into the details soon... but no promises. 😜

Thanks for the heads-up! I’ll handle it... eventually. 🙃

Catch you later,
${name}

P.S. If I ever tackle this grade, I’ll let you know. Until then, living my best life. 😎

P.S. Appreciate everything you do for us students! 🌟`,



Extrem:
`Subject: Grateful for the Feedback (and Hoping for a Little More Guidance 😅)

Dear Professor ${professorName},

I hope you’re doing well! First, thank you for the grade – while it’s a bit lower than I expected, I’m taking it as motivation to level up my skills 🦸‍♂️.

I know the grade is my responsibility, and your feedback is incredibly valuable. I’d love to understand where I went wrong – was it the formatting, wording, or did I miss that “secret sauce” 🍝? If so, I’ll make sure to bring the flavor next time!

Your lectures are always inspiring, and I truly admire your teaching style. It’s like an intellectual pep talk every day ✨.

I’m determined to use this feedback to fuel my next attempt 🚀 and improve my grade to something less “meh” and more “wow!” 🌟.

Thank you again for all your hard work. I appreciate everything you do and am excited to apply your guidance to come back stronger 💪.

Best regards,
${name}`
},

        GroupStudy:{
            sarcastic:
`Subject: A Study Session? What Could Possibly Go Wrong? 📚😂

Hey Legends,

A study session together? Genius! 🙃 Why study alone when we can fail in style? 😂 We’ve set the bar for excellence, right?

Let’s be real—this is prime procrastination. Memes, pretending to know the assignment, and acting prepared for the exam, even if we don’t know what chapter we’re on. 🤓💡

“Did you finish?” “Almost, five more minutes…” Productivity minus the work. 📚🤷‍♂️

Let’s pretend to study while mastering meme sharing. 🙃✨ I’ll contribute zero info, just sarcastic comments. 😎

When and where are we “studying”? I’ll show up with sloth-like enthusiasm. 🦥💤

Can’t wait for this “study” session—blast or disaster, who’s counting? 😂

Best,
${name}
The Queen/King of Procrastination 👑`,

dramatic:
` Subject: The Battle for Academic Glory Starts NOW! ⚔️📚

Dear Warriors of Knowledge, 🏰

Exams are here, and the stress beast is closing in! 😱 But fear not! Armed with textbooks, determination, and caffeine, we shall rise! ⚡️

This is THE study session, where we make our fate! 📖🔥 We’ll strategize, laugh, panic, and spam memes for morale. Expect highs, lows, and a lot of fun, but victory is ours! 💥👑

So, when and where? Our battleground awaits! ⏰🚀 We’ll conquer, laugh, and rise victorious. 🌟

Who’s with me?! 🙋‍♀️🙋‍♂️ Let’s make this epic! 💥

For knowledge, for glory! 🎓✨

Your fearless leader, ${name} 🌟`,

        formal:
`Subject: Group Study Session Invitation 📚✨

Hey everyone!

Exams are coming, so how about we kick off some group study sessions to make it less stressful? 🙌

We can dive into the material, tackle tricky topics, and learn together. No question is too silly, and let’s even make boring textbooks fun! 📖✨

I’m flexible on location—just need a quiet spot to focus. Let me know when you’re free, and we’ll get it planned!

Looking forward to a productive session! 🎉📚

Cheers,
${name}
Your future favorite study buddy! 🤓`,

        lazy:
        `Subject: Study Session? Meh, Why Not… 😂

Hey Teachers’ Toys! 👋

Exams are coming, and procrastination is peak. 😎 Let’s meet up and “study” together—open a textbook, nod, scroll memes. Classic move. 😅

A cozy coffee shop sounds good—Wi-Fi, caffeine, and memes. ☕️🤪 We’ll look productive for 5 minutes, then laugh for 45. 🤷‍♂️

I’ll probably be late, but if there’s food, I’m 97% in. 🍕🍩

Let’s make this a vibe. 😎

Catch you later,
${name}
P.S. Snacks are a must. 🍫`,

Extrem: 
`Subject: The Ultimate Study Session Awaits! 🚀📚

Dear Superstars 🌟,

Exams are near, and it’s time to make this study session LEGENDARY! 💥

Imagine the power of us together, sharing knowledge and leveling up our game! 📚 Each of us has something to contribute—let’s make this session unstoppable. 💪

We’ll pick a time and place that works—library, café, rooftop, whatever! This is going to be fun, with studying, laughs, and maybe a dance break (moonwalking through equations 💃). Snacks are a must! 🍕☕️

Let me know when and where works for you, and let’s make this legendary! 🌍✨

Best,
${name}
Your Study Buddy Extraordinaire 🤩🎓`,
        },
    };


    if (!emails[emailType] || !emails[emailType][tone]) {
        document.getElementById('generated-email').textContent = "Invalid email type or tone selected.";
        return;
    }

    // Generate the email
    const emailContent = emails[emailType][tone];

    // Display the email content
    document.getElementById('generated-email').textContent = emailContent;
}

// Copy the generated email to clipboard
document.getElementById('copy-btn').addEventListener('click', () => {
    const emailContent = document.getElementById('generated-email').textContent;
    if (!emailContent.trim()) {
        alert("No email content to copy!");
        return;
    }
    
    navigator.clipboard.writeText(emailContent).then(() => {
        alert('Email copied to clipboard! 🎉');
    }).catch(() => {
        alert('Failed to copy email.');
    });
});