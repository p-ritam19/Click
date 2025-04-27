

// basic setup
let clicks = 0;
let bossHP = 10;

const clickBtn = document.getElementById('clickBtn');
const countText = document.getElementById('count');
const boss = document.getElementById('boss');
const healthBar = document.getElementById('health');
const healthContainer = document.getElementById('healthBar');
const message = document.getElementById('message');

const colors = ["#ff5733", "#ffd700", "#28a745", "#0099ff", "#6600ff", "#ff00aa"];

// simple sounds
const clickSound = new Audio('https://www.myinstants.com/media/sounds/button-click.mp3');
const hitSound = new Audio('https://www.myinstants.com/media/sounds/minecraft-hurt.mp3');

function moveBoss() {
    boss.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    boss.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    boss.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

clickBtn.addEventListener('click', function() {
    clicks++;
    countText.textContent = clicks;
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    clickSound.currentTime = 0; // Reset audio playback position
    clickSound.play(); // Play the sound

    if (clicks === 100) {
        boss.style.display = 'block';
        healthContainer.style.display = 'block';
        setInterval(moveBoss, 900); // Boss moves every 0.9 sec
        message.textContent = "Boss Appeared! Attack!! 👊";
    }
});
boss.addEventListener('click', function() {
    bossHP--;
    healthBar.style.width = (bossHP * 10) + "%";
    hitSound.play();

    if (bossHP <= 0) {
        alert("Boss Defeated! 🏆 Well done!");
        setTimeout(() => {
            location.reload();
        }, 600);
    }
});
