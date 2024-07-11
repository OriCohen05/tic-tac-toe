const Shape = require('./Shape');

class Cell{
    constructor(){
        this.emptyCell = true;
        this.shape = Shape.None;
    }
}

module.exports = Cell;