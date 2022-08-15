import { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, e.target.task.value]);
        e.target.task.value = '';
    }

    return (
        <div className="todo-list box">
            <div className="todo-list-title">
                <h2>To-do list</h2>
            </div>
            <div className="todo-list-content">
                <div className="todo-list-items">
                    <ul>
                        todo
                        {tasks.map((task, n) => {
                            return (
                                <li><input type="checkbox" key={n}/> {task}</li>
                            )
                            }
                        )}

                    </ul>
                </div>
                <div className="todo-list-items">

                    <form onSubmit={(e) => {handleOnSubmit(e)}}>
                        <input autoComplete='off' type="text" placeholder="Add a task" name="task"/>
                    </form>
                </div>

                    
            </div>
        </div>

    )

}

export default ToDoList;