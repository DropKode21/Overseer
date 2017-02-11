import React, { Component } from 'react'

class ToDoItem extends Component {
    render(){
        return (
            <div>{this.props.item}</div>
        )
    }
}

export default ToDoItem;
