import React, {useState} from 'react';
import './App.css';
import { Caracters } from './components/Caracters';
import { Header } from './components/Header';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";


  return (
    <div className={"App " + bg}>
      <h1>HOLA MUNDO</h1>
      <Header darkMode = {darkMode} setDarkMode = {setDarkMode}/>
      <Caracters/>
    </div>
  );
}

export default App;
