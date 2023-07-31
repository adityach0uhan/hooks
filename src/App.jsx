import { useState } from 'react';
import './App.css';

function App() {
  let count = 0;
  const [num,setNum]=useState(count)

  return (
    <>
      <div className='Main-Container'>
        <div className='Number-Box'> <h4>{num}</h4></div>
        <div className='btn-container'>
          <button className='btn decrement-btn' onClick={() => num < 1 ? setNum(0) : setNum(num - 1)}><i class="fa-solid fa-minus"></i></button>
          <button className='btn increment-btn' onClick={() => setNum(num + 1)}><i class="fa-solid fa-plus"></i></button>
        </div>
        <div className='reset-container'> <button className='btn reset-btn' onClick={() => setNum(0)}><i class="fa-solid fa-rotate"></i></button></div>
      </div>

    
   
    
    </>
  );
}

export default App;
