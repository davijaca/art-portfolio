import React from 'react';
import { Carousel } from 'react-carousel-minimal'
import Aioria from '../../assets/img/Aioria.bmp';
import Maximus from '../../assets/img/Maximus.bmp';
import Guizmo from '../../assets/img/Guizmurai.bmp';
import Mustang from '../../assets/img/Mustang.bmp';
import Dust from '../../assets/img/Dust.bmp';
import SelfPortrait from '../../assets/img/Self.jpg';
import Hand from '../../assets/img/TheHand.bmp';
import './sidebar.css';


function PortfolioBlock(props) {
  const data = [
    {
      image: Mustang,
      caption: "Boss 429",
    },
    {
      image: Guizmo,
      caption: "Guizmurai - A drawing of my brother in homage of our japanese ancestry"
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
      caption: "Dust"
    },
    {
      image: Hand,
      caption: "The Hand"
    },
  ];

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000100'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }


  return (
    <div className="App">
            <div className="container">
                  
                  <ul className="sidebar">
                  <li><span>DOWNLOAD FILES</span></li>
                   <li><a href={require("../../assets/files/Mustang.pdf")} download="Mustang.pdf">Mustang</a></li>
                   <li><a href={require("../../assets/files/Guizmurai.pdf")} download="Guizmurai.pdf">Guizmurai</a></li>
                   <li><a href={require("../../assets/files/Aioria.pdf")} download="Aioria.pdf">Aioria</a></li>
                   <li><a href={require("../../assets/files/Maximus.pdf")} download="Maximus.pdf">Maximus</a></li>
                   <li><a href={require("../../assets/files/SelfPortrait.pdf")} download="Self-Portrait.pdf">Self Portrait</a></li>
                   <li><a href={require("../../assets/files/Dust.pdf")} download="Dust.pdf">Dust</a></li>
                   <li><a href={require("../../assets/files/TheHand.pdf")} download="The-Hand.pdf">The Hand</a></li>
                   
                   
                  </ul>
                  
                  <div className="content">
                     
                  </div>
          </div>
          <Carousel
            data={data}
            time={8000}
            width="850px"
            height="750px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="rgba(0,0,0,0)"
            slideImageFit="contain"
            thumbnails={false}
            thumbnailWidth="100px"
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
