import React, {Component} from 'react';
import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm.js';
import Task from "./Components/Task/Task.js";


class App extends Component {
    state = {
        task: [
            {id:1, title: 'Купить покупки'},
            {id:2, title: 'Продать продажи'}
        ],

        currentTask: {id:'', title: ''}
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

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <div>
                    <h2>Добавить задачу</h2>
                    <AddTaskForm
                        task={this.state.currentTask}
                        onChangeInput={this.changeTaskInput}
                        onAddTask={this.addTask}
                    />
                </div>
                <div>
                    {this.state.task.map(task =>
                    {return <Task title={task.title} key={task.id} onRemoveTask={this.removeTask}/>})}

                </div>
            </div>
        );
    }
}

export default App;
