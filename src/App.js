import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState(null);
  function onKeyUp(e){
    e.preventDefault();
    setQuery(e.target.value);
    console.log(query);
  }
  function send(e) {
    e.preventDefault()
    console.log('lucas 123')
    const promise = axios.get(`https://sonhos-confinados.herokuapp.com/?${query}`)
    promise.then((resp)=>console.log(resp.data))
  }
  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={send}>
      <input
        type="search"
        onChange={(e) => onKeyUp(e)}
        value={query}
        placeholder={"digite sua query"}
      />
      <button type="submit">
        Enviar</button>
      </form>
      </header>
    </div>
  );
}

export default App;
