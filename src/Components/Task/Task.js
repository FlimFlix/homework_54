import React,{Component} from 'react';
import './Task.css'

class Task extends Component {
    render() {
        let button;
        if (this.props.status){
            button = <i className="far fa-check-circle" ></i>
        } else {
            button = <i className="far fa-circle" ></i>
        }

        return (
            <div className="task">
                <h1>{this.props.title}</h1>
                <p className='delete' onClick={this.props.onRemoveTask}>
                    <i className="far fa-trash-alt"></i>
                </p>
                <p className='status' onClick={this.props.onChangeStatus}>
                    {button}
                </p>
            </div>
        )
    }
}

export default Task;