import React, { Component } from 'react'
import ToDoItem from './ToDoItem.jsx';
import NewToDoItem from './NewToDoItem.jsx';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.addEvent = this.addEvent.bind(this);
        this.state = {
            allItems: this.props.items
        }
    }
    
    addEvent(toDoItem){
        let newItems = this.state.allItems.concat(toDoItem);
        this.props.getData(newItems);
        this.setState({ allItems: newItems });
    }
    
    render() {
        const items = this.state.allItems.map((item, idx) => {
            return <li><ToDoItem key={idx} item={item}/></li>;
        })

        return(
            <div>
                <ul>{items}</ul>
                <NewToDoItem addEvent={this.addEvent} />
            </div>
        );
    }

}

export default ToDoList;