const pokemon = ["bulbasaur.png", "charmander.png", "squirtle.png"];

function handleClick(item) {
        document.getElementById("image-player").className = "letsgo";
        document.getElementById("image-enemy").className = "letsgo";
    if (item == 'Charmander') {
        const enemy = pokemon[Math.floor(Math.random() * 3 + 1 - 1)];
        document.getElementById("image-player").src = "charmander.png";
        document.getElementById("image-enemy").src = enemy;
        document.getElementById("result").innerHTML = checkWinner(item, enemy);
    }
    else if (item === "Bulbasaur") {
        const enemy = pokemon[Math.floor(Math.random() * 3 + 1) - 1];
        document.getElementById("image-player").src = "./bulbasaur.png";
        document.getElementById("image-enemy").src = enemy;
        document.getElementById("result").innerHTML = checkWinner(item, enemy);
    } 
    else if (item === "Squirtle") {
        const enemy = pokemon[Math.floor(Math.random() * 3 + 1) - 1];
        document.getElementById("image-player").src = "./squirtle.png";
        document.getElementById("image-enemy").src = enemy;
        document.getElementById("result").innerHTML = checkWinner(item, enemy);
      }       
}

function checkWinner(player, enemy) {
    if (player === "Charmander") {
      if (enemy === "squirtle.png") {
        return "You Lose";
      }
      if (enemy === "bulbasaur.png") {
        return "You Win";
      }
      if (enemy === "charmander.png") {
        return "Draw";
      }
    }
    if (player === "Squirtle") {
      if (enemy === "squirtle.png") {
        return "Draw";
      }
      if (enemy === "bulbasaur.png") {
        return "You Lose";
      }
      if (enemy === "charmander.png") {
        return "You Win";
      }
    }
    if (player === "Bulbasaur") {
      if (enemy === "squirtle.png") {
        return "You Win";
      }
      if (enemy === "bulbasaur.png") {
        return "Draw";
      }
      if (enemy === "charmander.png") {
        return "You Lose";
      }
    }
  }