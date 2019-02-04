import React, {Component} from 'react';
import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm.js';


class App extends Component {
    state = {
        task: [],

        currentTask: {title: ''}
    };

    changeTaskInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let currentTask = {
            ...this.state.currentTask,
            [name]: value
        };
        this.setState({
            ...this.state,
            currentTask
        });
    };

    render() {
        return (
            <div className="App">
                <div>
                    <h2>Добавить задачу</h2>
                    <AddTaskForm task={this.state.currentTask} onChangeInput={this.changeTaskInput}/>
                </div>
            </div>
        );
    }
}

export default App;
