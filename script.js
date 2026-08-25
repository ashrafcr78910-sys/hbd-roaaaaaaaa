const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");

/* الأصوات */
const bgMusic = document.getElementById("bgMusic");
const bgLaugh = document.getElementById("bgLaugh");

/* مستوى الصوت */
bgMusic.volume = 0.10;
bgLaugh.volume = 0.04;

/* الباسورد الجديد */
function checkPassword(){
    if(passwordInput.value === "1982005"){
        passwordScreen.style.display = "none";
        mainContent.style.display = "block";

        bgMusic.play();
        bgLaugh.play();

        launchConfetti();
    } else {
        alert("الباسورد غلط 😭");
    }
}

/* الكلام المتغير بعد إضافة الصفات الجديدة */
const texts = [
    "ضحكتك 🎀",
    "هزارك 😂",
    "عيونك 👁️✨",
    "خفة دمك 🌸",
    "برودك برضو 🥶😜",
    "طيبتك 💕",
    "وجودك المقرب ❤️",
    "إنك مميزة 🌸"
];

let index = 0;

setInterval(() => {
    index++;
    if(index >= texts.length){
        index = 0;
    }
    document.getElementById("changingText").innerText = texts[index];
}, 2500);

/* الكونفيتي */
function launchConfetti(){
    for(let i = 0; i < 70; i++){
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.zIndex = "9999";
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
