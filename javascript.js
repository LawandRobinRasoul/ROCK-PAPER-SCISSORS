console.log("Låt oss spela sten sax påse!");
const divs = document.querySelectorAll("div");
let points = [0, 0];
divs.forEach((div) => div.addEventListener("click", game));

function game(e) {
	const endgame = document.getElementById("2");
	let playersChoice = this.classList.value;

	e.stopPropagation();
	points = playRound(playersChoice, computerPlay());

	if (points[0] == 5) {
		endgame.textContent = "Du vann mot datorn, grattis!";
		endgame.style.cssText = "color:green;";

		document.getElementById("1").textContent =
			"Resultat: " + points[0] + "-" + points[1];
		divs.forEach((div) => div.removeEventListener("click", game));
		setTimeout(playAgain, 4000);
	} else if (points[1] == 5) {
		endgame.textContent = "Du förlorade mot datorn, bättre lycka nästa gång!";
		endgame.style.cssText = "color:red;";
		document.getElementById("1").textContent =
			"Resultat: " + points[0] + "-" + points[1];
		divs.forEach((div) => div.removeEventListener("click", game));
		setTimeout(playAgain, 4000);
	}
	document.getElementById("1").textContent =
		"Resultat: " + points[0] + "-" + points[1];
}

function playAgain() {
	location.reload();
}

function playRound(playersChoice, computerChoice) {
	const roundGame = document.getElementById("3");

	if (playersChoice == computerChoice) {
		roundGame.textContent =
			"Det blev lika denna rundan, ni båda valde " + computerChoice;
	} else if (
		(computerChoice == "Sten" && playersChoice == "Sax") ||
		(computerChoice == "Sax" && playersChoice == "Påse") ||
		(computerChoice == "Påse" && playersChoice == "Sten")
	) {
		roundGame.textContent =
			"Du förlorade denna rundan,  du valde " +
			playersChoice +
			" och datorn valde " +
			computerChoice;

		points[1] += 1;
	} else {
		roundGame.textContent =
			"Du vann denna rundan, du valde " +
			playersChoice +
			" och datorn valde " +
			computerChoice;
		points[0] += 1;
	}

	return points;
}

function computerPlay() {
	const computersChoices = ["Sten", "Sax", "Påse"];

	let computerChoice =
		computersChoices[(Math.random() * computersChoices.length) | 0];

	return computerChoice;
}
