import './App.css';
import React , { component } from 'react';
//import Mycomponent from './components/Greet';

import Post from './components/post';


function App() {
  return (
    <div className='app'>
   <div className='app_header'>
     <img  className="app_headerImage" width="150" height="100"    src="http://shimmeringsoul.weebly.com/uploads/1/3/0/3/13031044/1-xkmi4fb5vws6-my7b22lza_1.png"/>
   </div>

   <h1>Hello Damon</h1>

   <Post />
   </div>
  );
}

export default App;
