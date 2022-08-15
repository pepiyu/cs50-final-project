import { useState } from 'react';
import './App.css';
import Workspace from './components/Workspace';
import Desktop from './components/Desktop';
function App() {


  const [ reproduction, setReproduction ] = useState(
    {
      id: '9aJsVTBDeyA',
      name: 'Study with me'
    }
    );

  const [ mute, setMute ] = useState(true)

  return (
    <div className="App">
      <main className="fullscreen">
        <Workspace reproduction={reproduction} mute={mute}/>
        <Desktop setReproduction={setReproduction} mute={mute} setMute={setMute} />
        
      </main>



    </div>
  );
}

export default App;
