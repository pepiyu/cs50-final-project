import Navbar from '../Navbar';
import Timer from '../Timer';
import ToDoList from '../ToDoList';

const Desktop = ({setReproduction, mute, setMute}) => {
    return (
        <div className="desktop">
            <Navbar setReproduction={setReproduction} mute={mute} setMute={setMute}/>
            <Timer/>
            <ToDoList/>

        </div>
    );
}

export default Desktop;