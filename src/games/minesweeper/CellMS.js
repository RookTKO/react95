import {Component} from 'react';
import PropTypes from 'prop-types'; 

class CellMS extends Component {
    getValue() {
      const {value} = this.props;
      
      if (!value.isRevealed) {
        return this.props.value.isFlagged ? "🚩" : null;
      }
      if (value.isMine) {
        return "💣";
      }
      if (value.neighbour === 0) {
        return null;
      }
      return value.neighbour;
    }
  render() {
      const {value, onClick, cMenu} = this.props;    
      return (
        <div
          onClick={this.props.onClick}
          onContextMenu={this.props.cMenu}
        >
        {this.getValue()}
        </div>
      );
    }
  }
  // Type checking With PropTypes
  const cellItemShape = {
    isRevealed: PropTypes.bool,
    isMine: PropTypes.bool,
    isFlagged: PropTypes.bool
  }
  Cell.propTypes = {
    value: PropTypes.objectOf(PropTypes.shape(cellItemShape)),
    onClick: PropTypes.func,
    cMenu: PropTypes.func
  }

  export default CellMS;