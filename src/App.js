 import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';
import styled from 'styled-components';
import { useState  }  from 'react';
import './App.css';

function App() {
const [play, setPlay] = useState(false);

 const toggle = ()=>{
  setPlay((prev) => !prev)
}

  return (
    <div>
      {
        play ? <GamePlay/> : <StartGame toggle={toggle}/>
        
      }
       
        
    </div>
  );
}

export default App;


