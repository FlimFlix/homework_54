import React,{Component} from 'react';
import './Task.css'

class Task extends Component {
    render() {
        return (
            <div className="task">
                <h1>Задача:{this.props.title}</h1>
                <p><button onClick={this.props.onRemoveTask}>Удалить</button></p>
            </div>
        )
    }
}

export default Task;