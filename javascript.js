console.log("Låt oss spela sten sax påse!")

let points = [0, 0];
game();


function game() {
    for(let i = 0; i < 5; i++)
    {
   points = playRound(choice(), computerPlay())
    }
    console.log("resultater blev " + points[0] + "-" + points[1]);
}

function playRound(playersChoice, computerChoice) {

    if (playersChoice == computerChoice)
    {
        console.log("Du spelade lika mot monstret")

        points[0] += 1;
        points[1] += 1;

    }
    else if ((computerChoice == "Sten" && playersChoice == "Sax") ||
    (computerChoice== "Sax" && playersChoice == "Påse") ||
    (computerChoice == "Påse" && playersChoice == "Sten"))
    {
        console.log("Du förlorade mot monstret");
        points[1] += 1;
    }
    else {
        console.log("Du vann mot monstret")
        points[0] += 1;
    }
    
    return points;
}

function choice () {
    let playersChoice = prompt("Välj sten sax eller påse:");
    playersChoice = playersChoice.toLowerCase();
    playersChoice = playersChoice[0].toUpperCase() + playersChoice.slice(1);
    return playersChoice;
}

function computerPlay() {
const computersChoices = ["Sten", "Sax", "Påse" ]

let computerChoice = computersChoices[(Math.random() * computersChoices.length) | 0];

return computerChoice;

}
