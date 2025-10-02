import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

 function App() {

   let [number,setNumber] = useState(0);
   const add = ()=> {
     setNumber(number +1);
  }
   const less = ()=> {
    if(number !==0){
     setNumber(number -1);
    }
   }
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={add}>add</button>
      <button onClick={less}>minus</button>
    </div>
  );
}

export default App;
