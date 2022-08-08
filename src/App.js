import React from 'react';
import './App.css';
import { Caracters } from './components/Caracters/Caracters';
import { Header } from './components/Header';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const {theme, setTheme} = React.useContext(ThemeContext);
  let bg = theme ? "bg-dark" : "bg-light";


  return (
    <div className={"App " + bg}>
      <Header theme = {theme} setTheme = {setTheme}/>
      <Caracters/>
    </div>
  );
}

export default App;
