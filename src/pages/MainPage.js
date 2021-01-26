import React from 'react';
import './mainpage.css';
import picture from '../images/picture.jpg';

export function MainPage() {
    return (
        <div>
            <header>
                <a id="title" href="/">Welcome to my area</a>
            </header>
            <nav>
                <a id="toDaily" href="/dailyalbum">Daily Album</a>
                <a id="toMusic" href="/musicalbum">Music Album</a>
            </nav>
            <section>
                <img id="profile_pic" src={picture} alt="Me"/>
                <div className="content">
                    <h3 id="name">name: 이소정</h3>
                    <h3 id="school">school: Kookmin Univ.</h3>
                    <h3 id="sns">instagram: isojng</h3>
                    <h3 id="mail">e-mail: isoj0216@kookmin.ac.kr</h3>
                </div>
            </section>
        </div>
    );
}