import './App.css';
import React , { component } from 'react';
//import Mycomponent from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Mycomponent /> */}
     <Greet name='mom'/>
     <Greet name='Dad'/>
     <Greet name='Abi'/>
     {/* <Welcome /> */}
     {/* <Hello /> */}
    </div>
  );
}

export default App;
