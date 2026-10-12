class Ants {

    x: number;
    y: number;

    directionX: number;
    directionY: number;

    constructor(x:number, y:number, directionX:number, directionY:number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
    }

    turnLeft(){
        if (this.directionX === 0 && this.directionY === -1){
            this.directionX = -1;
            this.directionY = 0;
        }
        else if (this.directionX === 1 && this.directionY === 0){
            this.directionX = 0;
            this.directionY = -1;
        }
        else if (this.directionX === 0 && this.directionY === 1){
            this.directionX = 1;
            this.directionY = 0;
        }
        else if (this.directionX === -1 && this.directionY ===0){
            this.directionX = 0;
            this.directionY = 1;
        }

    }

    turnRight() {
        if (this.directionX === 0 && this.directionY === -1) {
            this.directionX = 1;
            this.directionY = 0;
        }
        else if (this.directionX === 1 && this.directionY === 0) {
            this.directionX = 0;
            this.directionY = 1;
        }
        else if (this.directionX === 0 && this.directionY === 1) {
            this.directionX = -1;
            this.directionY = 0;
        }
        else if (this.directionX === -1 && this.directionY === 0) {
            this.directionX = 0;
            this.directionY = -1;
        }
    }
    move(){
        this.x += this.directionX;
        this.y += this.directionY;
    }
}