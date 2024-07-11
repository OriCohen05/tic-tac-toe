import Shape from "./Shape.js";

export default class Cell{
    constructor(x, y){
        this.position = [x,y]
        this.emptyCell = true;
        this.shape = Shape.None;
    }
}