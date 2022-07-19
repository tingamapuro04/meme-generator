import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Nonsense from './components/Nonsense';
import troon from '.components/box'

function App() {
  const [first, setFirst] = useState(troon)
  return (
    <div className="App">
      <Header />
      <Form />
      <Nonsense />
    </div>
  );
}

export default App;
