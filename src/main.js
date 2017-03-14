import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';

let artists = ['Snoop Doggy Dog', 'Phish', 'Turqoise']

let randomArtist = () => {
  let number = artists.length;
      let randomNumber = Math.floor(Math.random() * number);
      return artists[randomNumber];
  }


let artist = randomArtist()
ReactDOM.render(
  <Popup message= {artist} />,
  document.getElementById('app')
);
