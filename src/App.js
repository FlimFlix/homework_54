import React, {Component} from 'react';
import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm.js';
import Task from "./Components/Task/Task.js";


class App extends Component {
    state = {
        task: [
            {id: 1, title: 'Купить покупки', status: false},
            {id: 2, title: 'Продать продажи', status: true}
        ],

        currentTask: {id: '', title: '', status: false}
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

    addTask = (event) => {
        event.preventDefault();
        let currrentTask = {...this.state.currentTask};
        const now = new Date();
        currrentTask.id = now.getTime();
        let task = [...this.state.task, currrentTask];
        this.setState({...this.state, task});
    };

    removeTask = (id) => {
        let taskId = this.state.task.findIndex(task => {
            return task.id === id;
        });


        const task = [...this.state.task];
        task.splice(taskId, 1);

        this.setState({
            ...this.state,
            task
        });
    };

    changeStatusTask = (id) => {
        let taskId = this.state.task.findIndex(task => {
            return task.id === id;
        });
        let task = {...this.state.task[taskId]};

        let tasks = [...this.state.task];
        tasks[taskId] = task;

        task.status = !task.status;
        let newState = {...this.state};
        newState.task = tasks;

        this.setState(newState);
    };

    requiredButton = () => {
        return this.state.currentTask.title === ''
    };


    render() {
        return (
            <div className="App">
                <div className="container">
                    <div>
                        <h2>Добавить задачу</h2>
                        <AddTaskForm
                            task={this.state.currentTask}
                            onChangeInput={this.changeTaskInput}
                            onAddTask={this.addTask}
                            onRequired={this.requiredButton()}
                        />
                    </div>
                    <div>
                        {this.state.task.map(task => {
                            return <Task
                                title={task.title} key={task.id} status={task.status}
                                onRemoveTask={() => this.removeTask(task.id)}
                                onChangeStatus={() => this.changeStatusTask(task.id)}
                            />
                        })}
                    </div>
                </div>
            </div>)
    };
}

export default App;
