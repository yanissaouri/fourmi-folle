import { Ants } from "../models/Ants";
import { Grids } from "../models/Grids";

class Simulation {

    ants: Ants;
    grids: Grids;

    constructor(ants:Ants, grids:Grids){
        this.ants = ants;
        this.grids = grids;
    }

    step(){
        this.ants.x;
        this.ants.y;

        if (this.grids.grid[this.ants.x][this.ants.y] === this.grids.white){
            this.ants.turnRight();
        }
        else{
            this.ants.turnLeft()
        }
        this.grids.switchColor(this.ants.x, this.ants.y);

        this.ants.move();
    }

}