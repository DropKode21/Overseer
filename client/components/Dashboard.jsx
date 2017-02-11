import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';
import { browserHistory } from 'react-router';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.data;
        this.addProject = this.addProject.bind(this);
    }

    addProject(e) {
        browserHistory.push('/addproject');
    }

    render() {

        return (
            <div>
                <h1>Task List</h1>

                this.data.map( (project) => {
                    <li><Project name={project.name}/><Progressbar progress={project.progress}/><Edit data={project.tasks}/></li>
                }


                <button onClick={this.addProject}>Add Project</button>

            </div>
        )
    }
}

export default Dashboard;