import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Nonsense from './components/Nonsense';
import troon from './components/Box'
import On from './components/On';

function App() {


  


  const [first, setFirst] = useState(troon);



  const elements = first.map(item => (
    <On on={item.on} key={item.id} ff={item.id} />
    ))
  return (
    <div className="App">
      <Header />
      <Form />
      {elements}
      <Nonsense setup={'mobutu'} punchline={'diego'} />
    </div>
  );
}

export default App;
