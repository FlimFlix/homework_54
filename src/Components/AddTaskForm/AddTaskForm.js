import React from 'react';

function AddTaskForm(props) {
    return(
        <div>
            <input type="text" name="title" value={props.task.title} onChange={props.onChangeInput}/>
            <button type="button">Добавить задачу</button>
        </div>
    )
}

export default AddTaskForm;