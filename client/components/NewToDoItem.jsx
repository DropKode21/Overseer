import React, { Component } from 'react'
    
    class NewToDoItem extends Component {
      constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

      render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="itemName" type="text" />
                </form>
            </div>
        );
      }

      onSubmit(event){
        console.log('submit running')
        event.preventDefault();
        let inputValue = event.target.elements.itemName.value;
        this.props.addEvent( inputValue );
        event.target.elements.itemName.value = "";
      }
    }

export default NewToDoItem;