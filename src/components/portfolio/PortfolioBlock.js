import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';
import { Carousel } from 'react-carousel-minimal'
import Aioria from '../../assets/img/Aioria.bmp';
import Maximus from '../../assets/img/Maximus.bmp';
import Guizmo from '../../assets/img/Guizmurai.bmp';
import Mustang from '../../assets/img/Mustang.bmp';
import Dust from '../../assets/img/Dust.bmp';
import SelfPortrait from '../../assets/img/Self.jpg';

function PortfolioBlock(props) {
  const data = [
    {
      image: Mustang,
      caption: "Boss 429",
      targetURL: "https://www.youtube.com/watch?v=Z9Z9Z9Z9Z9Z"
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
      image: Dust,
      caption: "Dust"
    },
    {
      image: SelfPortrait,
      caption: "Self Portrait"
    },
  ];

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000100;'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2> .</h2>
        <p>.</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={8000}
            width="850px"
            height="500px"
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
            thumbnails={true}
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
      </div>
    </div>
  );
}


export default PortfolioBlock;
