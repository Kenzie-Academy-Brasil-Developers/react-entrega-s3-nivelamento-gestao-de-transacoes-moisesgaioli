import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Input from './components/Input';
import Output from './components/Output';
import TotalTransactions from './components/TotalTransactions';

function App() {

  const [transactions, setTransactions ] = useState([
    {name: "banana", quantity: 100, price: 5 },
    {name: "morango", quantity: -10, price: 2 },
    {name: "laranja", quantity: 50, price: 6 },
  ])

  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);

  const [showResult, setResult] = useState(true);
  

  
  return (
    <div className="App">
      <header className="App-header">
        <Form transactions={transactions} setTransactions={setTransactions} input={input} setInput={setInput} output={output} setOutput={setOutput} />
        
        {showResult ? <Input input={input} setResult={setResult} /> : <Output output={output} setResult={setResult} />}

        <TotalTransactions transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
