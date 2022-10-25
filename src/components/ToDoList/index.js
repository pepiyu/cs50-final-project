import { useState, useEffect } from 'react';
import { FaMinus } from 'react-icons/fa'
const ToDoList = ({toDoListVisible, setToDoListVisible}) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem('tasks', '[]');
        } else {

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      }, [tasks]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const taskStatus = {name: e.target.task.value, done: false}
        setTasks([...tasks, taskStatus]);
        e.target.task.value = '';
    }

    const handleOnClick = (e) => {
        const name = e.target.name
        console.log(name);
        tasks.forEach((t, i) => {
            if (t.name === name)
            {
                const newTask = [...tasks]
                newTask[i].done = ! t.done;
                console.log(t.name);
                setTasks(newTask)
            }
        })
        
        //const newTask = {tasks[key]: }        
    }

    const clearAll = () => {
        setTasks([]);
    }

    const handleMinus = () => {
        setToDoListVisible(!toDoListVisible)
    }

    return (
        <div className="todo-list box" style={{display: toDoListVisible === true ? 'flex' : 'none'}}>
            <div className="box-title">
                <h2>To-do list </h2>
                <FaMinus onClick={handleMinus}/>
            </div>
            <div className="todo-list-content">
                <div className="todo-list-items">
                    <ul>

                        {tasks.map((task, n) => {
                            return (
                                <li key={n}> 
                                    <div className="list-item"> 
                                        <input type="checkbox" checked={task.done} onChange={(e) => handleOnClick(e)} name={task.name}/> {task.name} 
                                    </div>
                                </li>
                            )
                            }
                        )}


                    </ul>
                        {tasks.length === 0 &&
                            "No task for today :)"
                        }
                </div>


                    
            </div>
                <div className="todo-list-end">
                    <form onSubmit={(e) => {handleOnSubmit(e)}}>
                        <input style={{margin: '1rem, 0.1rem'}}
                        autoComplete='off' type="text" placeholder="Add a task" name="task"/>
                    </form>
                            <button onClick={() => clearAll()} 
                                style={{ border: '0px',  backgroundColor: tasks.length > 0 ? '#525252' : '#e8e8e8', color: '#fff',
                                }}>Clear All
                            </button>
                        

                </div>
        </div>

    )

}

export default ToDoList;