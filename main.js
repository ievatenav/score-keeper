let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let reset = document.querySelector("#reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let input = document.querySelector("input");

let gameOver = false;
let winningScore = 5;

p1.addEventListener("click", function() {
    addScore(p1Display);
});

p2.addEventListener("click", function() {
    addScore(p2Display);
});

reset.addEventListener("click", function() {
    resetGame();
})

function addScore(display) {
    if (!gameOver) {
        let score = Number(display.textContent);
        score++;
        console.log(score);
        if (score === winningScore) {
            gameOver = true;
            display.classList.add("winning");
        };
        display.textContent = score;    
    };
};

function resetGame() {
    p1Display.classList.remove("winning");
    p2Display.classList.remove("winning");
    p1Score = 0;
    p2Score = 0;
    p1Display.innerHTML = 0;
    p2Display.innerHTML = 0;
    gameOver = false;
};

input.addEventListener("change", function() {
    winningScore = Number(this.value);
    resetGame();
})