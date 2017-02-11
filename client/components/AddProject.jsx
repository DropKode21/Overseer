import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // console.log(this.state.projectData);

    }

    grabData(array) {
        this.setState({projectData: array});
    }

    render() {
        return (
            <div>
                this is the create page.
                <ToDoList getData={(array) => {this.grabData(array)
                    }} items={[]} />

                <button onClick={this.handleSubmit}>Add Project</button>
            </div>
        )
    }
}

export default AddProject;