const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

let currentlyPlaying = false;

class Field {
  constructor(field) {
    this._field = field;
    this._X = 0;
    this._Y = 0;
  }

  //print field method
  print() {
    for (let row of this._field) {
      console.log(row.join(" "));
    }
  }

  //Check if win/lose/path
  checkWinLose() {
    if (
      this._Y > this._field.length ||
      this._Y < 0 ||
      this._X > this._field[0].length ||
      this._X < 0
    ) {
      console.log("You left the field, you LOSE!");
      currentlyPlaying = false;
    } else if (this._field[this._Y][this._X] === hole) {
      console.log("You fell down a hole, you LOSE!");
      currentlyPlaying = false;
    } else if (this._field[this._Y][this._X] === hat) {
      console.log("You found your hat, you WIN!!");
      currentlyPlaying = false;
    } else {
      this._field[this._Y][this._X] = pathCharacter;
    }
  }

  //Method for player movement
  movePlayer(movement) {
    let movementToLower = movement.toLowerCase();
    switch (movementToLower) {
      case "u":
        this._Y -= 1;
        console.log("moved up");
        console.log(`Y: ${this._Y}`);
        console.log(`X: ${this._X}`);
        break;
      case "d":
        this._Y += 1;
        console.log("moved down");
        console.log(`Y: ${this._Y}`);
        console.log(`X: ${this._X}`);
        break;
      case "l":
        this._X -= 1;
        console.log("moved left");
        console.log(`Y: ${this._Y}`);
        console.log(`X: ${this._X}`);
        break;
      case "r":
        this._X += 1;
        console.log("moved right");
        console.log(`Y: ${this._Y}`);
        console.log(`X: ${this._X}`);
        break;
      default:
        console.log(
          "Invalid movement! Remember: u = up, d = down, l = left, r = right"
        );
    }
  }
  //Helper function which return hole or fieldcharacter based on percentage
  static fieldOrHole(percent) {
    let randNum = Math.random() * 100;
    if (percent < randNum) {
      return hole;
    }
    return fieldCharacter;
  }

  //Method to generate field of holes and field
  static generateField(height, width, percent) {
    const newField = [];
    for (let i = 0; i < height; i++) {
      let fieldRow = [];
      for (let j = 0; j < width; j++) {
        fieldRow.push(Field.fieldOrHole(percent));
      }
      newField.push(fieldRow);
    }
    newField[0][0] = pathCharacter;
    Field.placeHat(newField);
    return newField;
  }

  //Method to place hat
  static placeHat(arr) {
    let y = Math.floor(Math.random() * arr.length);
    let x = Math.floor(Math.random() * arr[0].length);
    console.log(`x is ${x} y is ${y}`);
    arr[y][x] = hat;
  }

  //Method to begin game
  startGame() {
    console.log(
      `Let's Play!
            Press 'U' to move up
            Press 'D' to move down
            Press 'L' to move left
            Press 'R' to move right`
    );
    currentlyPlaying = true;
    myField.print();

    while (currentlyPlaying) {
      let playerMove = prompt(`Your move!`);
      myField.movePlayer(playerMove);
      myField.checkWinLose();
      myField.print();
    }
  }
}

//Generate a field array
const myField1 = Field.generateField(9, 7, 75);

//Instantiate a new Fiel object using the field array
const myField = new Field(myField1);

//Begin game
myField.startGame();
