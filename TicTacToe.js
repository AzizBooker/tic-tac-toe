import playingChoices from './playerType';
import playingType from './playerType'

const TicTacToe = (playerChoice, computerChoice) => {
    if (playerChoice = playingChoices.X) {
        computerChoice = playingChoices.O
    } else {
        computerChoice = playingChoices.X
    }
    var firstMove
    var isPlaying = false
    var tiles = {
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
        6: " ",
        7: " ",
        8: " ",
        9: " "
    }
    //tiles=Array.from(tiles)
    var win
    const updateTile = function (value, isHuman) {
        if (isHuman) {
            tiles[value] = playerChoice;
        } else {
            console.log(`Computer Choice:${computerChoice}`)
            tiles[value] = computerChoice;
        }


    }
    const clearTileArray = () => {
        tiles.forEach(element => {
            element = " "
        })
        console.table(tiles)
    }
    const getWinStatus = () => {
        //List of Possible Player Wins. returns 1 if plaer win this turn
        if ((tiles[1] == playerChoice) && (tiles[2] == playerChoice) && (tiles[3] == playerChoice)) {
            console.log('Player Win')
            return 1;
        }
        else if ((tiles[4] == playerChoice) && (tiles[5] == playerChoice) && (tiles[6] == playerChoice)) {
            console.log('Win')
            return 1;
        }
        else if ((tiles[7] == playerChoice) && (tiles[8] == playerChoice) && (tiles[9] == playerChoice)) {
            console.log('Win')
            return 1;
        }
        else if ((tiles[4] == playerChoice) && (tiles[5] == playerChoice) && (tiles[6] == playerChoice)) {
            console.log('Win')
            return 1;
        }
        else if ((tiles[1] == playerChoice) && (tiles[5] == playerChoice) && (tiles[9] == playerChoice)) {
            console.log('Win')
            return 1;
        }
        else if ((tiles[3] == playerChoice) && (tiles[5] == playerChoice) && (tiles[7] == playerChoice)) {
            console.log('Win')
            return 1;
        }
        else if ((tiles[2] == playerChoice) && (tiles[4] == playerChoice) && (tiles[8] == playerChoice)) {
            console.log('Win')
            return 1;
        }


        //List of Possible Compiter Wins. Returns -1 if computer win this turn
        else if ((tiles[1] == computerChoice) && (tiles[2] == computerChoice) && (tiles[3] == computerChoice)) {
            console.log('Player Win')
            return -1;
        }
        else if ((tiles[4] == computerChoice) && (tiles[5] == computerChoice) && (tiles[6] == computerChoice)) {
            console.log('Win')
            return -1;
        }
        else if ((tiles[7] == computerChoice) && (tiles[8] == computerChoice) && (tiles[9] == computerChoice)) {
            console.log('Win')
            return -1;
        }
        else if ((tiles[4] == computerChoice) && (tiles[5] == computerChoice) && (tiles[6] == computerChoice)) {
            console.log('Win')
            return -1;
        }
        else if ((tiles[1] == computerChoice) && (tiles[5] == computerChoice) && (tiles[9] == computerChoice)) {
            console.log('Win')
            return -1;
        }
        else if ((tiles[3] == computerChoice) && (tiles[5] == computerChoice) && (tiles[7] == computerChoice)) {
            console.log('Win')
            return -1;
        }
        else if ((tiles[2] == computerChoice) && (tiles[5] == computerChoice) && (tiles[8] == computerChoice)) {
            console.log('Win')
            return -1;
        }
        //Returns 0 if no win this turn
        else {
            return 0;
        }
    }
    const getComputerMove = () => {
        var isFound = false;
        var randTile;
        while (isFound == false) {
            randTile = getRandomTile()

            if (tiles[randTile] == " ") {
                isFound = true
            }

        }
        updateTile(randTile, false)
        return randTile;



    }
    function getRandomTile() {
        return Math.floor((Math.random() * 9) + 1)
    }
    const getPlayingStatus = () => {
        isPlaying = false;
        tiles.forEach(element => {
            if (element != " ") {
                isPlaying = true;
            }
        });
        console.log(`isPlaying:${isPlaying}`)
    }
    //Checks if tile has X or O 
    const checkIfTileEmpty = (value) => {
        if (tiles[value] != " ") {
            console.log(`btn value:${value}`)
            return true;
        } else {
            return false;
        }
    }
    const getTileData = () => console.table(tiles)
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



    return { playerChoice, sayPlayerChoice, getPlayerChoice, sayFirstMove, getFirstMove, updateTile, getTileData, getWinStatus, isPlaying, getPlayingStatus, clearTileArray, getComputerMove, checkIfTileEmpty }
}


export {TicTacToe}