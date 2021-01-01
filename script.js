const playingChoices = {
    X: 'X',
    O: 'O'
}
const playerType = {
    Human: 'Human',
    Computer: 'Computer',
}
Object.freeze(playingChoices)
Object.freeze(playerType)

const TicTacToe = (playerChoice, computerChoice) => {
    var firstMove
    var tiles={
        1:" ",
        2:" ",
        3:" ",
        4:" ",
        5:" ",
        6:" ",
        7:" ",
        8:" ",
        9:" "
    }
    const updateTile=function(value,isHuman){
        if(isHuman){
        tiles[value]=playerChoice;
        }else{
            tiles[value]=computerChoice
        }

    }
    const getWinStatus=function(){
        if((tiles[0]==playerChoice ))
        console.log('WIN')
    }
    const getTileData=()=>console.table(tiles)
    const sayPlayerChoice = () => console.log(`player Choice:${playerChoice}`)
    const getPlayerChoice = () => playerChoice;
    const sayComputerType = () => console.log(`Computer Choice:${computerChoice}`)
    const getComputerType = () => computerChoice
    const sayFirstMove = () => console.log(`First Move:${firstMove}`)
    const getFirstMove = () => firstMove

    if (playerChoice == playingChoices.X) {
        firstMove = playerType.Human
    } else {
        firstMove = playerType.Computer
    }



    return { playerChoice, sayPlayerChoice, getPlayerChoice, computerChoice, sayFirstMove, getFirstMove,updateTile,getTileData,getWinStatus }
}
game = TicTacToe(playingChoices.X)
game.sayFirstMove()
game.getTileData()



var buttons = []

var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')
var btn5 = document.querySelector('#btn5')
var btn6 = document.querySelector('#btn6')
var btn7 = document.querySelector('#btn7')
var btn8 = document.querySelector('#btn8')
var btn9 = document.querySelector('#btn9')

buttons.push(btn1)
buttons.push(btn2)
buttons.push(btn3)
buttons.push(btn4)
buttons.push(btn5)
buttons.push(btn6)
buttons.push(btn7)
buttons.push(btn8)
buttons.push(btn9)

game = TicTacToe(playingChoices.X)
game.sayFirstMove()



function onBtnHover(btn) {

    if (game.getPlayerChoice() == playingChoices.X) {
        btn.textContent = `X`

    } else {
        btn.textContent = `O`

    }
    btn.classList.add('hover-btn')
}
function onBtnOut(btn) {
    if(!btn.classList.contains('place-btn'))
    btn.textContent = ''
    btn.classList.remove('hover-btn')
}

function onBtnClick(btn) {
    if (game.getPlayerChoice() == playingChoices.X) {
        btn.textContent = `X`
        btn.classList.add('place-btn')
    } else {
        btn.textContent = `O`
        btn.classList.add('place-btn')
    }
        game.updateTile(btn.value,true)
        game.getTileData()
        game.getWinStatus()
    



}
function onBtnTypeClick(btn){
    
}

