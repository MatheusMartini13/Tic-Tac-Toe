let mainMatrix = [[0,0,0],[0,0,0],[0,0,0]]
let turn = 1;
let gameOver = 0;

const buttonsPlay = document.querySelectorAll(".ticTac")
const name1 = document.getElementById("Jogador1")
const name2 = document.getElementById("Jogador2")
const warnings = document.getElementById("mainText")

function playerNameText(){
    if (name1.value === "" | name2.value === ""){
    warnings.innerHTML = "<h1 style='color: yellow; background-color: red; padding: 10px 20px'>Jogadores ainda estão sem nome!</h1>"
    return 1
  }
}


buttonsPlay.forEach(element => {element.addEventListener("click", function(ev){
  if (playerNameText() === 1 | gameOver === 1) {
    return
  }
  if (element.innerText === ""){
    let usedSimbol = play();
    element.innerText = usedSimbol;
    playPosition(element.dataset.position, usedSimbol)
    warnings.innerHTML = "<h1 style='color: yellow; background-color: red; padding: 10px 20px'>Próximo turno de " + playerName(1) + "</h1>"
    check(usedSimbol)
  }
})
});

function playerName(ev=0){
  if (turn%2 === 0 + ev){
    return name1.value;
  } else {
    return name2.value;
  }
}

name1.addEventListener("focusout", function(){
  name1.setAttribute("disabled","")
})

name2.addEventListener("focusout", function(){
  name2.setAttribute("disabled","")
})

function playPosition(pos, usedSimbol){
  switch (pos) {
    case "1":
      mainMatrix[0][0] = usedSimbol
      break;
    case "2":
      mainMatrix[1][0] = usedSimbol
      break;
    case "3":
      mainMatrix[2][0] = usedSimbol
      break;
    case "4":
      mainMatrix[0][1] = usedSimbol
      break;
    case "5":
      mainMatrix[1][1] = usedSimbol
      break;
    case "6":
      mainMatrix[2][1] = usedSimbol
      break;
    case "7":
      mainMatrix[0][2] = usedSimbol
      break;
    case "8":
      mainMatrix[1][2] = usedSimbol
      break;
    case "9":
      mainMatrix[2][2] = usedSimbol
      break;
    }
}

function play(){
  let usedSimbol = 0;
  if (turn%2 === 0){
    usedSimbol = "O";
  } else {
    usedSimbol = "X";
  }
  turn +=1
  return usedSimbol;
}


function check(usedSimbol){
  if (mainMatrix[0][0]===usedSimbol & mainMatrix[0][1]===usedSimbol & mainMatrix[0][2] === usedSimbol |
      mainMatrix[1][0]===usedSimbol & mainMatrix[1][1]===usedSimbol & mainMatrix[1][2] === usedSimbol |
      mainMatrix[2][0]===usedSimbol & mainMatrix[2][1]===usedSimbol & mainMatrix[2][2] === usedSimbol |
      mainMatrix[0][0]===usedSimbol & mainMatrix[1][0]===usedSimbol & mainMatrix[2][0] === usedSimbol |
      mainMatrix[0][1]===usedSimbol & mainMatrix[1][1]===usedSimbol & mainMatrix[2][1] === usedSimbol |
      mainMatrix[0][2]===usedSimbol & mainMatrix[1][2]===usedSimbol & mainMatrix[2][2] === usedSimbol |
      mainMatrix[0][0]===usedSimbol & mainMatrix[1][1]===usedSimbol & mainMatrix[2][2] === usedSimbol |
      mainMatrix[0][2]===usedSimbol & mainMatrix[1][1]===usedSimbol & mainMatrix[2][0] === usedSimbol ){
      warnings.innerHTML = "<h1 style='color: white; background-color: green; padding: 10px 20px'>" + playerName() + " venceu o jogo!</h1>"
      gameOver = 1;
      }
  }

  function reset (){
  if (playerNameText() === 1) {
    return
  }
    mainMatrix = [[0,0,0],[0,0,0],[0,0,0]]
    buttonsPlay.forEach(element => {
    element.innerText = "";
    })
    warnings.innerHTML = "<h1>Novo jogo iniciado!</h1>"
    turn = 1;
    gameOver = 0;
  }