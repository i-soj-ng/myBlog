import React from 'react';
import japan from '../images/japan.jpg';
import taiwan from '../images/taiwan.jpg';
import taiwanFlower from '../images/taiwanFlower.jpg';
import flowers from '../images/flowers.jpg';
import './photoalbum.css';

export function PhotoAlbum() {
    return (
        <section>
            <div className="pictures">
                <img id="taiwanFlower" src={taiwanFlower} alt=""/>
                <img id="taiwan" src={taiwan} alt=""/>
                <img id="flowers" src={flowers} alt=""/>
            </div>
        </section>
    );
}