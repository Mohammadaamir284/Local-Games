
let a = Math.floor(Math.random() * 200) + 1;
console.log(a)
let score = 8;
let inp2 = false;
let me = document.getElementById("me2")



function sendme(params) {

    if (inp2) return

    const userInput = document.getElementById("nume").value.trim();

    if (userInput === "") {

        console.log(" Game Cancelled by user.");
        me.textContent = "Game Cancelled.";
        inp2 = true
        return;
    }

    inp = parseInt(userInput);


    if (isNaN(inp) || inp < 1 || inp > 200) {

        me.textContent = "Invalid input! Enter a number between 1 and 200.";
    }

    score--;


    if (score <= 0) {
        // alert(` Game Over! You've run out of tries. The correct number was ${a}.`);
        console.log(` Game Over! The correct number was: ${a}`);
        me.textContent = ` Game Over! You've run out of tries. The correct number was ${a}.`
    }


    if (inp === a) {
        //    alert(`🎉 Congratulations! You guessed it right!\nThe number was ${a}.\nYour final score: ${score}`);
        me.textContent = `🎉 Congratulations! You guessed it right!\nThe number was ${a}.\nYour final score: ${score}`;
        console.log(" Right Guess! You are the Winner!");
        console.log(` The Actual Number was: ${a}`);
        console.log(` Your Final Score: ${score}`);

    } else if (inp < a) {
        // alert(" Your guess is too low! Try again.");
        me.textContent = ` Your guess is too low! Try again. \n You’ve got ${score} chances left.`
    } else if (inp > a) {
        //  alert(" Your guess is too high! Try again.");
        me.textContent = ` Your guess is too high! Try again.\n You’ve got ${score} chances left.`
    }

    else {

        console.log(" Game Cancelled by user.");

        me.textContent = "Game Cancelled.\nOnly Number You Can Try ";
        inp2 = true

    }

    document.getElementById("nume").value = ""
}

let getgame = Math.floor(Math.random() * 3);
let game = ["stone", "paper", "scissor"][getgame]
console.log(game)
console.log(getgame)
let game2 = false
let me2 = document.getElementById("me")

function sendyou(params) {
    if (game2) return
    const aamir = document.getElementById("nume2").value.trim();
    if (aamir === "") {
        me2.textContent = "GameOver Try Again"
        game2 = true
        return
    }


    if (!["stone", "paper", "scissor"].includes(aamir)) {
        me2.textContent = "❌ Invalid input! Please type: stone, paper, or scissor.";
        return;
    }

    const macth = (game, aamir) => {


        if (game === aamir) {
            return "Match is Tied If You Want To play SO Relod The Page And Try Againe "
        }
        else if (game === "stone" && aamir === "paper") {
            return me2.textContent = "You Are Winner"
        }
        else if (game === "paper" && aamir === "scissor") {
            return me2.textContent = "You Are Winner"
        }
        else if (game === "scissor" && aamir === "stone") {
            return me2.textContent = "You Are Winner"
        }
        else if (game === "paper" && aamir === "stone") {
            return me2.textContent = "Computer Is Winner"
        }
        else if (game === "scissor" && aamir === "paper") {
            return me2.textContent = "Computer Is Winner"
        }
        else if (game === "stone" && aamir === "scissor") {
            return me2.textContent = "Computer Is Winner"
        }
    }

        let result = macth(game, aamir)
        me2.textContent = (`Computer is ${game}  /  You Are ${aamir} \n  ${result}`)
        game2 = true
   

    document.getElementById("nume2").value = ""
}




window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nume").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            sendme();
        }
    });

    document.getElementById("nume2").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            sendyou();
        }
    });
});