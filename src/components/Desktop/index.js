import {useState} from 'react'
import Navbar from '../Navbar';
import Timer from '../Timer';
import ToDoList from '../ToDoList';
import Draggable from 'react-draggable'; // Both at the same time

const Desktop = ({setReproduction, mute, setMute, timerVisible, setTimerVisible, toDoListVisible, setToDoListVisible}) => {


    return (
        <div className="desktop">
            <Navbar 
            setReproduction={setReproduction} 
            mute={mute} 
            setMute={setMute}
            setTimerVisible={setTimerVisible}
            setToDoListVisible={setToDoListVisible}
        
            
            />
            <Draggable>
                <div>
                    <Timer
                    timerVisible={timerVisible}
                    setTimerVisible={setTimerVisible}
                    />
                </div>
            </Draggable>
            <Draggable>
                <div>
                <ToDoList
                toDoListVisible={toDoListVisible}
                setToDoListVisible={setToDoListVisible}
                
                />
                </div>
            </Draggable>

        </div>
    );
}

export default Desktop;