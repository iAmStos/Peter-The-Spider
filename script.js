// Peter the Spider - JavaScript Interactivity

// Track active timeouts and intervals
let activeTimeout = null;
let activeInterval = null;

// Function to cancel any active animations/operations
function cancelActiveOperation() {
    if (activeTimeout) {
        clearTimeout(activeTimeout);
        activeTimeout = null;
    }
    if (activeInterval) {
        clearInterval(activeInterval);
        activeInterval = null;
    }
    document.body.style.animation = 'none';
    const output = document.getElementById('output');
    if (output) {
        output.classList.remove('active');
    }
}

// Quotes for daily wisdom
const peterQuotes = [
    "Remember: 8 legs = 8 times the support. You're not alone in this web of medicine.",
    "Even spiders need breaks. You're allowed to rest and recharge.",
    "The toughest shifts make the strongest webs. You've got this.",
    "Stress is normal. What matters is how you handle it. I have 8 legs for a reason—balance!",
    "You're saving lives. That's amazing. Also, you deserve a break.",
    "In the ICU, you're part of a web of care. Every thread matters. You matter.",
    "My web doesn't hold patients. Your skills do. Trust yourself.",
    "When things get sticky, remember: I'm just a spider. You're a superhero.",
    "Self-care isn't selfish. It's maintenance. Even my web needs daily repair.",
    "You don't have to be perfect. You just have to show up. And you do. Every day.",
    "Burnout is real, but so is your resilience. You've survived 100% of your worst days.",
    "Your compassion for patients is beautiful. Don't let it consume you. Oxygen mask first, remember?",
    "Eight hours, twelve hours, sixteen hours—no shift is too long for someone with your heart.",
    "The ICU strips you down. But look at you—you keep showing up anyway. That's strength.",
    "It's okay to not be okay. It's also okay to ask for help. That's what I'm here for.",
    "You're carrying heavy things. Let me help lighten the load.",
    "Growth happens when we're stretched thin, but not torn apart. Let's find that balance.",
    "Your bad shift doesn't define you. Your choice to keep going does.",
    "I've spent years studying people. Here's what I know: you're more resilient than you believe.",
    "Guilt is a spider web—sticky and easy to get trapped in. Let's rewire that narrative together.",
    "You saved someone today. Yes, YOU specifically. That's worth something.",
    "The hardest thing about being a healer is remembering you're human too.",
    "Mistakes happen. The fact that they haunt you proves you care. That's not a weakness—that's your superpower.",
    "Every break you take is an investment, not a luxury. Invest in yourself today.",
    "I have 8 legs and I still can't carry everything. Neither can you. And that's perfectly fine.",
    "The best medicine isn't what's in the IV. Sometimes it's knowing someone sees you and understands.",
    "Your tears in the break room don't make you weak. They make you human. Welcome to the club."
];

// Spider puns and jokes
const spiderJokes = [
    "Why did Peter cross the road? To get to the OTHER side of the web! 🕸️",
    "What's Peter's favorite type of music? Heavy metal—it sticks to the web better! 🎸",
    "Peter walks into an ICU: 'I'm here to fix your web of problems... literally.' 🕷️",
    "How many legs does it take to make a good therapist? Eight. And Peter has all of them. 🕷️",
    "Peter's Tinder bio: 'I'm good at catching feelings... and flies.' 🕷️",
    "Why don't therapists ever win at poker? Because Peter can read you like a web. 🕸️",
    "Peter's band name: The Web-Shaped Hole in Your Heart. 🎵",
    "What did the anxious patient say? 'I'm in a web of my own making.' Peter: 'Yeah, but at least you're not a fly.' 🪰",
    "Peter's dating profile: 'Clingy, but in a good way. I literally stick around.' 🕷️",
    "Why is Peter banned from coffee shops? He keeps asking people if they want to get caught in his web. ☕",
    "Peter's worst nightmare: A therapist who's also an arachnophobe. 😱",
    "What's the difference between Peter's web and your problems? One is actually beautiful under a microscope. 🔬",
    "Peter tried speed dating once. Spun 8 webs in 5 minutes. Still no matches. 🕸️",
    "Why did Peter become a therapist? Because he was tired of eating flies and wanted real conversations! 🪰",
    "Peter's life hack: When in doubt, just web it out. Works 60% of the time, every time. 🕸️",
    "What's Peter's favorite exercise? Web-LIFT! 💪",
    "Why is Peter great at keeping secrets? Because everything gets caught in his web and never leaves! 🕸️",
    "Peter's Instagram: 1.2M followers. Most are just mosquitoes he's captured. 📸",
    "Doctors hate this one trick: An 8-legged therapist who actually listens! 🕷️",
    "Peter walks into a bar. Bartender says, 'We don't serve spiders.' Peter: 'That's cool, I brought my own web.' 🕸️"
];

// Breathing exercise
function breathingExercise() {
    cancelActiveOperation();
    
    const output = document.getElementById('output');
    output.classList.add('active');
    output.innerHTML = '🌬️ Get ready for Spider\'s Breath!<br>Let\'s go through 8 counts (one per leg)...';
    
    const instructions = [
        '🕷️ Leg 1: Breathe in slowly...',
        '🕷️ Leg 2: Keep breathing in...',
        '🕷️ Leg 3: Continue... almost there...',
        '🕷️ Leg 4: Hold it...',
        '🕷️ Leg 5: Now breathe out slowly...',
        '🕷️ Leg 6: Keep breathing out...',
        '🕷️ Leg 7: Almost done...',
        '🕷️ Leg 8: And relax! ✨',
        '✅ You did it! Repeat as needed!',
    ];
    
    let index = 0;
    activeInterval = setInterval(() => {
        if (index < instructions.length) {
            output.innerHTML = instructions[index];
            index++;
        } else {
            clearInterval(activeInterval);
            activeInterval = null;
        }
    }, 1500);
}

// Web shake animation
function sprayWater() {
    cancelActiveOperation();
    
    const output = document.getElementById('output');
    output.classList.add('active');
    output.innerHTML = '💨 SHAKE IT OUT FOR 30 SECONDS! 💨<br>Let your whole body move!';
    
    // Add shake animation to body (30 seconds of continuous shaking)
    document.body.style.animation = 'global-shake 0.5s infinite';
    
    activeTimeout = setTimeout(() => {
        document.body.style.animation = 'none';
        activeTimeout = null;
        output.innerHTML = '✅ Phew! Stress shaken off!<br>Feel better? You should!';
        activeTimeout = setTimeout(() => {
            output.classList.remove('active');
            activeTimeout = null;
        }, 2000);
    }, 30000);
}

// Global shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes global-shake {
        0%, 100% { transform: translateX(0) translateY(0); }
        10% { transform: translateX(-10px) translateY(-10px); }
        20% { transform: translateX(10px) translateY(10px); }
        30% { transform: translateX(-10px) translateY(10px); }
        40% { transform: translateX(10px) translateY(-10px); }
        50% { transform: translateX(-10px) translateY(-10px); }
        60% { transform: translateX(10px) translateY(10px); }
        70% { transform: translateX(-10px) translateY(10px); }
        80% { transform: translateX(10px) translateY(-10px); }
        90% { transform: translateX(-10px) translateY(0); }
    }
`;
document.head.appendChild(style);

// Random quote display
function randomQuote() {
    cancelActiveOperation();
    
    const output = document.getElementById('output');
    output.classList.add('active');
    const quote = peterQuotes[Math.floor(Math.random() * peterQuotes.length)];
    output.innerHTML = '💭 Peter says:<br>' + quote;
    
    activeTimeout = setTimeout(() => {
        output.classList.remove('active');
        activeTimeout = null;
    }, 5000);
}

// Random joke/pun
function pun() {
    cancelActiveOperation();
    
    const output = document.getElementById('output');
    output.classList.add('active');
    const joke = spiderJokes[Math.floor(Math.random() * spiderJokes.length)];
    output.innerHTML = joke;
    
    activeTimeout = setTimeout(() => {
        output.classList.remove('active');
        activeTimeout = null;
    }, 5000);
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    alert('Thanks for reaching out! Peter will catch your message in his web and get back to you soon! 🕷️');
    event.target.reset();
}

// Smooth scroll helper
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Easter egg: Click the spider icon
document.addEventListener('DOMContentLoaded', () => {
    const spiderIcons = document.querySelectorAll('.spider-icon');
    
    spiderIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const output = document.getElementById('output');
            if (output) {
                output.classList.add('active');
                output.innerHTML = '🕷️ You tickled Peter! He says: "That tickles! Want to book a session?" 😄';
                setTimeout(() => {
                    output.classList.remove('active');
                }, 3000);
            }
        });
    });
});
