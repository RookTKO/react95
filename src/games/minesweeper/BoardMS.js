import { Component } from "react";
import PropTypes from 'prop-types'; 

class BoardMS extends Component{
    state = {
        boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
        gameStatus: false,
        mineCount: this.props.mines
    };

    initBoardData(height,width,mines){
        let data = [];
        for(let i = 0; i< height; i++)
        {
            data.push([]);
            //console.log(data);
            for(let j = 0; j < width; j++)
            {
                data[i][j] = {
                    x: i,
                    y: j,
                    isMine: false,
                    ammountOfNeighborMines: 0,
                    isReveled: false,
                    isEmpty: false,
                    isFlagged: false
                }
            }
        }
        data = this.plantMines(data, height, width, mines);
        //data = this.getNeighbours(data, height, width);
        console.log(data)
        return data;
    }

    plantMines(data, height, width, mines){
        let xRandom, yRandom, minesPlanted = 0;

        while(minesPlanted < mines)
        {
            xRandom = Math.floor(Math.random() * width);
            yRandom = Math.floor(Math.random() * height);
            if(!(data[xRandom][yRandom].isMine))
            {
                data[xRandom][yRandom].isMine = true;
                minesPlanted++;
            }
        }
        return data;
    }

    getNeighbouringMines(data, height, width)
    {
        
        for(let i = 0; i<width;i++)
        {
            for(let j = 0; j<height;j++)
            {
                if(!(data[i][j].isMine))
                {
                    let mineAmmount = 0;

                    let neighbouringTiles = getSurroundingTiles(data[i][j].x,data[i][j].y,data);

                    neighbouringTiles.map(tile => 
                        {
                            if(tile.isMine)
                            {
                                mineAmmount++;
                            }
                        });
                        if(mineAmmount === 0)
                        {
                            data[i][j].isEmpty = true;
                        }
                        data.neighbouringTiles = ammountOfNeighborMines;
                }
            }
        }
    }

    getSurroundingTiles(x,y,data){

    }


    render(){
        return(
            <div className="board">
                <div className="game-info">
                <span className="info">
                    mines: {this.state.mineCount}
                </span>
                <br />
                <span className="info">
                   game STatus:  {String(this.state.gameStatus)}
                </span>
                <br />
                </div>
                {/*{ this.renderBoard(this.state.boardData)}*/}
          </div>
        )
    }

}
// Type checking With PropTypes
BoardMS.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    mines: PropTypes.number,
  }

export default BoardMS;