import './App.css';

import { useState } from 'react';


function App() {

  let [counter,setcounter] = useState(2);

  const Increase = ()=>{
 
    setcounter(counter+1);
    
  }
  

  const Decrease = ()=>{

    if(counter === 0)
      {
        counter=0
      }
      else
    setcounter(counter-1);

    
  }


  return (
    <div className="App">
      <h1>Counter Value : {counter}</h1>

      <div className="button-container">
      
      <button onClick = {Increase}>Increment</button>
      <button onClick = {Decrease}>Decrement</button>

    <p>We wanted to update multiple location values at once thats 
      we use useState , so instead of using query selector everytime
      we can just use usestate
    </p>

      </div>
     
    </div>
  );
}

export default App;
