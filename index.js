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

            h2Text.innerHTML = `PRESS "A" UNTIL DAWN`;
     
            aBtn.addEventListener('click', function () {
                
                game.score++;
                
            });
        }
    };
  
    aBtn.addEventListener('click', function () {
        h2Text.innerHTML = 'Score: ' + game.score;
          if (game.score >= 10) {
            h2Text.innerHTML += ' WOAW ' ;
            game.score++;
        } if (game.score >=50 ){
            h2Text.innerHTML += ' CHILL BRUH ' ;
            game.score++;
        } if (game.score >=100 ){
            h2Text.innerHTML += ' DAMN ' ;
            game.score++;
        } if (game.score >= 200) {
            h2Text.innerHTML = 'Score :' + game.score + ' STAHP MAN '; 
            game.score++;
        } if (game.score >=500 ){
            h2Text.innerHTML += ' GET A LIFE ' ;
            game.score++;
            game.score++;
        } if (game.score >=1000 ){
            h2Text.innerHTML = 'Score :'  + game.score + '\n'+ ' SERIOUSLY GO OUTSIDE IDK ';
            game.score++;
            game.score++;
        } if (game.score >=1500 ){
            h2Text.innerHTML = 'Score :' + game.score + '\n'+ "I'M GONNA RESET I SWEAR";
            game.score++;
            game.score++;
        } if (game.score >=2000 ){
            h2Text.innerHTML = 'Score :' + game.score + '\n'+ "I WARNED YOU";
            game.score++;
        } if (game.score >=2100 ){
            location.reload();
        }
    });

    game.start();
}

