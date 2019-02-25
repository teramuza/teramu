import React, { Component } from 'react';
import Player from './src/screens/Contents/Player';

export const TRACKS = [
  {
    title: 'Lemon',
    artist: 'Kenshi Yonezu',
    albumArtUrl: "http://st.cdjapan.co.jp/pictures/l/07/02/SRCL-9749.jpg",
    audioUrl: "https://teramuza.xyz/assets/about/audio.mp3",
  },
  {
    title: 'Uchiage Hanabi',
    artist: 'DAOKO x Kenshi Yonezu',
    albumArtUrl: "http://st.cdjapan.co.jp/pictures/l/01/18/TFCC-89632.jpg",
    audioUrl: 'http://srv2.dnupload.com/Music/Album/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20(320)/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20128/05%20Love%20Yourself.mp3',
  },
  {
    title: 'Himawari',
    artist: 'MR.CHILDREN',
    albumArtUrl: 'https://images-na.ssl-images-amazon.com/images/I/51%2B4yaqsrcL.jpg',
    audioUrl: 'http://dl2.shirazsong.org/dl/music/94-10/CD%201%20-%20Best%20of%202015%20-%20Top%20Downloads/03.%20Drake%20-%20Hotline%20Bling%20.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


