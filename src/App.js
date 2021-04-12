import './App.css';
import React, {useState, useEffect} from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

function App() {
  let defaultPerson = [];
  console.log(defaultPerson);
  const [person, setPerson] = useState(defaultPerson);

  function getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes').then((response) => response.data).then((data) => {setPerson(data[0]);});
  }

  useEffect(() => {
    getQuote();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <QuoteCard person={person} />
        <button type="button" onClick={getQuote}>Get new quote</button>        
        
      </header>
    </div>
  );
}

export default App;
