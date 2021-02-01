import React from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage";
import {PhotoAlbum} from "./pages/PhotoAlbum";
import {MusicAlbum} from "./pages/MusicAlbum";
import {Route} from 'react-router-dom';

function App() {
  return (
      <div>
          <Route path="/"><MainPage></MainPage></Route>
          <Route path="/photo_album"><PhotoAlbum></PhotoAlbum></Route>
          <Route path="/music_album"><MusicAlbum></MusicAlbum></Route>
      </div>
  );
}

export default App;
