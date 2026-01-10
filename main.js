const levelEl = document.getElementById('level');
const hpEl = document.getElementById('hp');
const mpEl = document.getElementById('mp');
const expEl = document.getElementById('exp');
const hpBar = document.querySelector('.hp');
const mpBar = document.querySelector('.mp');
const expBar = document.querySelector('.exp');
const expButton = document.getElementById('exp-button');
const restButton = document.getElementById('rest-button');

let level = 1;
let hp = 100;
let maxHp = 100;
let mp = 50;
let maxMp = 50;
let exp = 0;
let maxExp = 100;

expButton.addEventListener('click', () => {
    exp += 20;
    if (exp >= maxExp) {
        level++;
        exp = exp - maxExp;
        maxExp = Math.floor(maxExp * 1.5);
        maxHp = Math.floor(maxHp * 1.2);
        maxMp = Math.floor(maxMp * 1.2);
        hp = maxHp;
        mp = maxMp;
    }
    updateUI();
});

restButton.addEventListener('click', () => {
    hp = maxHp;
    mp = maxMp;
    updateUI();
});

function updateUI() {
    levelEl.textContent = level;
    hpEl.textContent = hp;
    mpEl.textContent = mp;
    expEl.textContent = exp;
    hpBar.style.width = `${(hp / maxHp) * 100}%`;
    mpBar.style.width = `${(mp / maxMp) * 100}%`;
    expBar.style.width = `${(exp / maxExp) * 100}%`;
}

updateUI();