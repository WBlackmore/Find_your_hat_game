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

    //Checks if within field
    isInField(position){
        if(((this._Y > 6) || (this._Y < 0)) || (this._X > 3) || (this._X < 0)){
            console.log("Stay in the field")
        }
    }


    //Check if win/lose/path
    checkWinLose(){
        let position = this._field[this._Y][this._X];
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
        let movementToLower = movement.toLowerCase();
        switch(movementToLower){
            case 'u':
                this._Y -= 1;
                console.log("moved up")
                console.log(this._Y)
                console.log(this._X)
            break;
            case 'd':
                this._Y += 1;
                console.log("moved down")
                console.log(this._Y)
                console.log(this._X)
            break;
            case 'l':
                this._X -= 1;
                console.log("moved left")
                console.log(this._Y)
                console.log(this._X)
            break;
            case 'r':
                this._X += 1;
                console.log("moved right")
                console.log(this._Y)
                console.log(this._X)
            break;
            default:
                console.log("Invalid movement! Remember: u = up, d = down, l = left, r = right")
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

  

    function startGame(){
        console.log((
            `Let's Play!
            Press 'U' to move up
            Press 'D' to move down
            Press 'L' to move left
            Press 'R' to move right`))
        playing = true;
        myField.print();
        while(playing){
            let playerMove = prompt(`Your move!`)
                myField.movePlayer(playerMove)
                myField.checkWinLose()
                myField.print()
        }
        
    }

    startGame()