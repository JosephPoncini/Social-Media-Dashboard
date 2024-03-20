import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './assets/icon-facebook.svg';
import Twitter from './assets/icon-twitter.svg';
import Instagram from './assets/icon-instagram.svg';
import Youtube from './assets/icon-youtube.svg';
import TitleComponent from './components/Title/TitleComponent';

function App() {
  return (
    <div className="App dark:bg-VeryDarkBlueBG ">
      <TitleComponent/>
    </div>
  );
}

export default App;
