import React from 'react';
import{useState} from 'react'
import './index.css';
import Time from './Time';

const App = () =>
{
const state = useState();
// console.log(useState) useState return two think object and function
const [count,setCount] = useState(0);//intial value count is intial
// let count = 1;
const Count = ()=> 
{
  setCount(count+1);//setCount is current value
  // console.log("Clicked "+ count++);
  
}

  return(
  <>
    <h1> {count} </h1>
    <button onClick={Count}>Total Click</button>  
    <div>
      <Time/>
    </div>
  </>)
}

export default App;
