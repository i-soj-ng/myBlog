import React from 'react';
import './mainpage.css';
import 꽃의왈츠 from '../audio/꽃의왈츠.mp3';

export function MainPage() {
    return (
        <div>
            <header>
                <a id="title" href="/">SOJNG's REPOSITORY</a>
                <audio id="player" controls autoplay loop src={꽃의왈츠}></audio>
            </header>
            <nav>
                <div className="category">
                    <a id="toPhoto" href="/photo_album">Photo Album</a>
                    <a id="toMusic" href="/music_album">Music Album</a>
                </div>
            </nav>
        </div>
    );
}