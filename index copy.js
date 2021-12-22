const startBtn = document.getElementById("select")
const selectBtn = document.getElementById("start")
const aBtn = document.getElementById("b")
const bBtn = document.getElementById('a')
const cross = document.getElementById('cross')
const h2Text = document.getElementById("h2txt")

startBtn.addEventListener("click", gamez)


selectBtn.addEventListener("click", function () {
    location.reload(); 

})

let called = false;

function gamez() {

    if (called) return;
    called = true;

    let game = {
        score: 0,
        start: function () {
            this.score = 0;
            this.addEnemy();
        },
        addEnemy: function () {

            h2Text.innerHTML = `PRESS A JUSQU'AU BOUT DE LA NUIT`;
     
            aBtn.addEventListener('click', function () {
                game.score++;
            });
        }
    };
  
    aBtn.addEventListener('click', function () {
        h2Text.innerHTML = 'Score: ' + game.score;
    });

    game.start();
}



