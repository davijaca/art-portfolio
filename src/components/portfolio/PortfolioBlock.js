import React from 'react';
import { Carousel } from 'react-carousel-minimal'
import Aioria from '../../assets/img/Aioria.bmp';
import Maximus from '../../assets/img/Maximus.bmp';
import Guizmo from '../../assets/img/Guizmurai.bmp';
import Mustang from '../../assets/img/Mustang.bmp';
import Dust from '../../assets/img/Dust.bmp';
import SelfPortrait from '../../assets/img/Self.jpg';
import Hand from '../../assets/img/TheHand.bmp';
import MeineLiebe from '../../assets/img/MeineLiebe.bmp';
import Moonlight from '../../assets/img/Moonlight.bmp';
import Baphomet from '../../assets/img/Baphomet.bmp';
import GameConcept from '../../assets/img/GameConcept.jpg';

import './sidebar.css';


function PortfolioBlock(props) {
  const data = [
    {
      image: Mustang,
      caption: "Boss 429",
    },
    {
      image: Guizmo,
      caption: "Guizmurai"
    },
    {
      image: Moonlight,
      caption: "Moonlight"
    },
    {
      image: Baphomet,
      caption: "Baphomet"
    },
    {
      image: Aioria,
      caption: "Aioria"
    },
    {
      image: Maximus,
      caption: "Maximus"
    },
    {
      image: SelfPortrait,
      caption: "Self Portrait"
    },
    {
      image: Dust,
      caption: "Dust (Sketch)"
    },
    {
      image: Hand,
      caption: "The Hand (Sketch)"
    },
    {
      image: MeineLiebe,
      caption: "Meine Liebe (Sketch)"
    },
    {
      image: GameConcept,
    },
  ];

  const captionStyle = {
    fontSize: '5em',
    fontWeight: 'bold',
    textShadow: '5px 5px 8px #000100'
  }
  const slideNumberStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
            <div className="container">
                  
                  <ul className="sidebar">
                  <span>DOWNLOAD PRESENTATION FILES</span>
                   <li><a href={require("../../assets/files/Mustang.pdf")} download="Mustang.pdf">Mustang</a></li>
                   <li><a href={require("../../assets/files/Guizmurai.pdf")} download="Guizmurai.pdf">Guizmurai</a></li>
                   <li><a href={require("../../assets/files/Aioria.pdf")} download="Aioria.pdf">Aioria</a></li>
                   <li><a href={require("../../assets/files/Maximus.pdf")} download="Maximus.pdf">Maximus</a></li>
                   <li><a href={require("../../assets/files/SelfPortrait.pdf")} download="Self-Portrait.pdf">Self Portrait</a></li>
                   <li><a href={require("../../assets/files/Dust.pdf")} download="Dust.pdf">Dust</a></li>
                   <li><a href={require("../../assets/files/TheHand.pdf")} download="The-Hand.pdf">The Hand</a></li>
                  </ul>
          </div>
          <div class="navbar">
          <ul>
                  <span>DOWNLOAD PRESENTATION FILES</span>
                   <li><a href={require("../../assets/files/Mustang.pdf")} download="Mustang.pdf">Mustang</a></li>
                   <li><a href={require("../../assets/files/Guizmurai.pdf")} download="Guizmurai.pdf">Guizmurai</a></li>
                   <li><a href={require("../../assets/files/Aioria.pdf")} download="Aioria.pdf">Aioria</a></li>
                   <li><a href={require("../../assets/files/Maximus.pdf")} download="Maximus.pdf">Maximus</a></li>
                   <li><a href={require("../../assets/files/SelfPortrait.pdf")} download="Self-Portrait.pdf">Self Portrait</a></li>
                   <li><a href={require("../../assets/files/Dust.pdf")} download="Dust.pdf">Dust</a></li>
                   <li><a href={require("../../assets/files/TheHand.pdf")} download="The-Hand.pdf">The Hand</a></li>
                  </ul>
          </div>
          <Carousel
            data={data}
            time={3000}
            width="850px"
            height="750px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="rgba(0,0,0,0)"
            slideImageFit="contain"
            thumbnails={false}
            thumbnailWidth="1px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              minHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
  );
}


export default PortfolioBlock;
