import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

class Store {
  #something: string;

  constructor(something: string) {
    this.#something = something;
  }

  get something() {
    return this.#something;
  }
}

function App() {
  const [store, setStore] = useState(() => new Store("something"));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {store.something}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
