class Grids{

    gridRow:number = 100;
    gridColumn:number = 100;
    grid:number[][] = [];
    
    white:number = 0;
    black:number = 1;

    constructor(gridRow:number, gridColumn:number){
        this.gridRow = gridRow;
        this.gridColumn = gridColumn;

        for (let i:number = 0; i < this.gridRow; i++){
            this.grid[i] = [];
            for (let j:number = 0; j < this.gridColumn; j++){
                this.grid[i][j] = 0;
            }
        }
    }
    
    switchColor(x:number, y:number){
        if(this.grid[x][y] === 0){
            this.grid[x][y] = 1
        }
        else {
            this.grid[x][y] = 0
        }
    }
}