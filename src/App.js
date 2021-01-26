import React from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage";
import {DailyAlbum} from "./pages/DailyAlbum";
import {MusicAlbum} from "./pages/MusicAlbum";
import {Route} from 'react-router-dom';

function App() {
  return (
      <div>
          <Route path="/"><MainPage></MainPage></Route>
          <Route path="/dailyalbum"><DailyAlbum></DailyAlbum></Route>
          <Route path="/musicalbum"><MusicAlbum></MusicAlbum></Route>
      </div>
  );
}

export default App;
