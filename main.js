const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field){
        this._field = field;
        this._Xposition = 0;
        this._Yposition = 0;
    }

    getField(){
        return this._field;
    }

    //print field method
    print(){
        for (let row of this._field){
            console.log(row.join(' '))
        } 
    }

    moveLeft(left){
        this._Xposition -= 1;
    }
    moveRight(right){
        this._Yposition += 1;
    }
    moveUp(){
        this._Yposition -= 1;
    }
    moveDown(){
        this._Yposition += 1;
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