// Peter the Spider - JavaScript Interactivity

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
    "You don't have to be perfect. You just have to show up. And you do. Every day."
];

// Spider puns and jokes
const spiderJokes = [
    "Why did Peter go to therapy? Because everyone needed a specialist in dealing with the pressure! 🕷️",
    "What's the difference between an ICU nurse and a spider? The spider only has 8 legs to keep busy! 😄",
    "Why do spiders make great therapists? We're experts at catching things before they spiral! 🕸️",
    "Peter's therapy motto: 'We'll catch your problems before they catch you!' 🕷️",
    "What did the ICU doctor say to Peter? 'Thanks for always having my back—all 8 perspectives of it!' 😂",
    "Why is Peter the spider so good at his job? He knows how to create a strong support web! 🕸️",
    "Peter's favorite ICU shift? When there's literally nothing catching (well, except anxiety)! 🕷️",
    "What do you call a spider therapist? A web-being specialist! 👨‍⚕️",
    "Peter's life hack: 8 legs = standing on 2 at a time during therapy = comfort! 🕷️"
];

// Breathing exercise
function breathingExercise() {
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
    const interval = setInterval(() => {
        if (index < instructions.length) {
            output.innerHTML = instructions[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 1500);
}

// Web shake animation
function sprayWater() {
    const output = document.getElementById('output');
    output.classList.add('active');
    output.innerHTML = '💨 SHAKE IT OUT FOR 30 SECONDS! 💨<br>Let your whole body move!';
    
    // Add shake animation to body (30 seconds of continuous shaking)
    document.body.style.animation = 'global-shake 0.5s infinite';
    
    setTimeout(() => {
        document.body.style.animation = 'none';
        output.innerHTML = '✅ Phew! Stress shaken off!<br>Feel better? You should!';
        setTimeout(() => {
            output.classList.remove('active');
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
    const output = document.getElementById('output');
    output.classList.add('active');
    const quote = peterQuotes[Math.floor(Math.random() * peterQuotes.length)];
    output.innerHTML = '💭 Peter says:<br>' + quote;
    
    setTimeout(() => {
        output.classList.remove('active');
    }, 5000);
}

// Random joke/pun
function pun() {
    const output = document.getElementById('output');
    output.classList.add('active');
    const joke = spiderJokes[Math.floor(Math.random() * spiderJokes.length)];
    output.innerHTML = joke;
    
    setTimeout(() => {
        output.classList.remove('active');
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
