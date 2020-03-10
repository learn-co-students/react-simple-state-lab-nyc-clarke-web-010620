import React, { Component } from 'react';

class Cell extends Component {

    
    state = {
            color: this.props.value
        }


    test = (e) => {
        this.setState({color: "#333"})
    }

     render() {
    return (
      <div className="cell" onClick={this.test} style={{backgroundColor: this.state.color}}>
          Test  
      </div>    
    )
  }
}

export default Cell;