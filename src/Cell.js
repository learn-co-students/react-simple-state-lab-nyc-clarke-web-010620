import React from 'react'

class Cell extends React.Component {
    constructor(props){
        super(),
        this.state = {
            color:props.value
        }
    }

    click = () => {this.setState({color: '#333'})}

    render() {
        return (
            <div className= "cell" onClick={this.click} style={{backgroundColor:this.state.color}}> </div>
        )
    }
}

export default Cell;