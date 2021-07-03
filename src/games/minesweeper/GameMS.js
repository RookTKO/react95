import { Component } from "react";
import BoardMS from './BoardMS'

class GameMS extends Component {
    state = {
        height: 8,
        width: 8,
        mines: 2
    };



    render() {
        return (
            <>
            <p> Hello </p>
            
            <BoardMS height={this.state.height} width={this.state.width} mines={this.state.mines} /> 
             
            </>
        );
    }
}

export default GameMS;