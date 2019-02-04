import React,{Component} from 'react';
import './Task.css'

class Task extends Component {
    render() {
        return (
            <div className="task">
                <h1 className='h1'>
                    {this.props.title}
                </h1>
            </div>
        )
    }
}

export default Task;