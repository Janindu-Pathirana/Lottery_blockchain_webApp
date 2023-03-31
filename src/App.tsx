import React from 'react';
import "./app.css";

function App() {

  const chooseWinner = () => {

  }

  const buyTicket = () => { }

  return (
    <>
      <div>
        <div className='text'>Buy ticket</div>
        <input className='input' />
        <button className='button' onClick={buyTicket}>buy</button>
      </div>

      <div>
        <div className='text'>choose winner</div>
        <button className='button' onClick={chooseWinner}>choose</button>
      </div>

      <div>
        <div className='text bold'>
          winner is </div>
      </div>
    </>
  );
}

export default App;


