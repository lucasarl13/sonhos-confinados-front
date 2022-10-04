import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState(null);
  const [result, setResult] = useState([]);
  function onKeyUp(e) {
    e.preventDefault();
    setQuery(e.target.value);
    console.log(query);
  }
  function send(e) {
    e.preventDefault();
    console.log({ query });
    axios
      .get(`https://sonhos-confinados.herokuapp.com/?query=${query}`)
      .then((resp) => {
        console.log(resp.data);
        setResult(resp.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={send}>
          <input type="search" onChange={(e) => onKeyUp(e)} value={query} placeholder={"digite sua query"} />
          <button type="submit">Enviar</button>
        </form>
        {result === "Infelizmente Query inválida"
          ? result
          : result.map((r, i) => (
              <div>
                <h3>Resultado Nº {i + 1}</h3>
                <ul>
                  {Object.keys(r).map((item) => (
                    <h6>
                      {item} : {r[item] ? r[item] : "Sem resposta"}
                    </h6>
                  ))}
                </ul>
              </div>
            ))}
      </header>
    </div>
  );
}

export default App;
