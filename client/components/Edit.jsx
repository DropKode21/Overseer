import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [],
            tasks: this.props.data
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
                    }} items={[this.state.tasks]} />

                <button onClick={this.handleSubmit}>Edit Project</button>
            </div>
        )
    }
}

export default Edit;
