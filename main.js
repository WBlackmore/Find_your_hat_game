const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let playing = false;

class Field{
    constructor(field){
        this._field = field;
        this._X = 0;
        this._Y = 0;
    }

    //returns current field
    getField(){
        return this._field;
    }

    //print field method
    print(){
        for (let row of this._field){
            console.log(row.join(' '))
        } 
    }


    //Check if win/lose/path
    checkWinLose(position){
        switch(position){
            case hole:
                console.log("You lose");
                break;
            case hat:
                console.log("You win");
            case fieldCharacter:
                this._field[this._Y][this._X] = pathCharacter;
        }

    }

    //Method for player movement
    movePlayer(movement){
        switch(movement){
            case 'u':
                this._Y -= 1;
                console.log("moved up")
            break;
            case 'd':
                this._Y += 1;
                console.log("moved down")
            break;
            case 'l':
                this._X -= 1;
                console.log("moved left")
            break;
            case 'r':
                this._Y += 1;
                console.log("moved right")
            break;
            default:
                Console.log("Invalid movement! Please choose again.")
        }
    }


}

//field example
const field1 = [
    ['*', '░', '░', '░', '░'], 
    ['░', 'O', '░', '░', '░'], 
    ['░', 'O', 'O', '░', '░'], 
    ['░', '░', 'O', 'O', '░'], 
    ['░', 'O', 'O', '░', '░'],
    ['░', 'O', '^', '░', '░'],
    ['░', 'O', '░', '░', '░']]

    //field perameters
    //Top left field[0][0]
    //Top right field[0][4]
    //Bottom left field [6][0]
    //Bottom right field [6][4]
    //x max = 3
    //y max = 6

    const myField = new Field(field1);

    myField.print();

    function startGame(){
        playing = true;
        while(playing){
            let playerMove = prompt(
                `Let's Play!
                Press 'U' to move up
                Press 'D' to move down
                Press 'L' to move left
                Press 'R' to move right`)
                myField.movePlayer(playerMove)
                myField.checkWinLose()
                myField.print()
        }
        
    }

    startGame()