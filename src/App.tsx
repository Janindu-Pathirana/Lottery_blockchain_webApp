import React, { useCallback, useEffect, useState } from 'react';
import "./app.css";
import lotterry from './web3Services/lotterry';
import web3 from './web3Services/web3';


function App() {

  const [manager, setManager] = useState<string>("");
  const [contractBalance, setContractBalance] = useState<string>("0");
  const [amount, setAmount] = useState<number>(0);
  const [winner, setWinner] = useState<string>("");

  const chooseWinner = async () => {

    //find winner-  lazy to change method name :)
    const val = await lotterry.methods.selectOwner().call();

    console.log(val);

    setWinner(val);

  }

  const buyTicket = async () => {

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const val = await lotterry.methods.buyTecket().send({
      value: web3.utils.toWei(amount.toString(), "ether"),
      from: accounts[0],
    });
    console.log(val);

    init();
  }

  const init = useCallback(async () => {

    const val = await lotterry.methods.getOwner().call();
    setManager(val);

    const amount = await web3.eth.getBalance(lotterry.options.address);
    setContractBalance(amount);

  }, [])

  useEffect(() => {

    init();
  }, [init])

  return (
    <>
      <div>
        <div className='text'>Manager is : {manager}</div>
        <br />
        <div className='text'>contact balance is : {web3.utils.fromWei(contractBalance.toString(), "ether")} ether</div>

      </div>
      <div>
        <div className='text'>Buy ticket</div>
        <input className='input' value={amount} onChange={(val) => { setAmount(parseInt(val.target.value)) }} />
        <button className='button' onClick={buyTicket}>buy</button>
      </div>

      <div>
        <div className='text'>choose winner</div>
        <button className='button' onClick={chooseWinner}>choose</button>
      </div>

      <div>
        <div className='text bold'>
          winner is {winner} </div>
      </div>
    </>
  );
}

export default App;


