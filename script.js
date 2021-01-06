import {TicTacToe} from './modules/TicTacToe.js';
import {playerType} from './modules/playerType.js'
import {playingChoices} from './modules/playerChoice.js';



var buttons = []
var game
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')
var btn5 = document.querySelector('#btn5')
var btn6 = document.querySelector('#btn6')
var btn7 = document.querySelector('#btn7')
var btn8 = document.querySelector('#btn8')
var btn9 = document.querySelector('#btn9')
var xBtn = document.querySelector('#xBtn')
var oBtn = document.querySelector('#oBtn')
var startButton = document.querySelector('#startBtn')
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
    /*
    if (game.getPlayerChoice() == playingChoices.X) {
        if (buttons[btn.value - 1].textContent == "") {
            btn.textContent = 'X'
        } else {

        }

    } else {
        if (buttons[btn.value - 1].textContent == "") {
            btn.textContent = 'X'
        }else{

        }



    }
    btn.classList.add('hover-btn')
    */
}

function onBtnOut(btn) {
    if (!btn.classList.contains('place-btn'))
        btn.textContent = ''
    btn.classList.remove('hover-btn')
}

function onBtnClick(btn) {
    //On TicTacToe board button click
    if (game.checkIfTileEmpty() == true) {
        if (game.getPlayerChoice() == playingChoices.X) {
            btn.textContent = `X`
            btn.classList.add('place-btn')
        } else {
            btn.textContent = `O`
            btn.classList.add('place-btn')
        }
        game.updateTile(btn.value, true)
        game.getWinStatus()
        var i = game.getComputerMove()
        buttons[i - 1].textContent = 'S'
        game.getTileData()
    } else {
        console.log('Tile is not Empty')
    }


}
function onTypeBtnClick(btn) {
    if (game.getPlayingStatus == false) {
        if (btn.value == 'X') {
            game.playerChoice = playingChoices.X
        } else {
            game.playerChoice = playingChoices.O
        }
        console.log('Game Not Playing')
    }
    else {
        console.log('Game Playing')
    }
}

function clearBoard() {
    buttons.forEach(btn => {
        btn.textContent = " "
    })
    game.clearTileArray()
}
