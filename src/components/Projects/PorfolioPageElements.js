import React from "react";
import { ParallaxLayer } from '@react-spring/parallax';
import { MouseParallax } from "react-just-parallax";
import CloudThird from '../../assets/cloud_3';
import CloudTwo from '../../assets/cloud_2';
import CloudOne from '../../assets/cloud_1';
import AirBalloon from '../../assets/airBalloon';

const PorfolioPageElements = () => {
  return (
    <>
      <ParallaxLayer offset={1} speed={0.3} >
        <MouseParallax strength="0.01">
          <CloudThird width={108} height={85} style={{  marginLeft: '90%', marginTop: '10%' }} />
        </MouseParallax>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} >
        <MouseParallax strength="0.01">
          <CloudTwo width={146} height={93} style={{  marginLeft: '65%', marginTop: '5%' }} />
        </MouseParallax>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} >
        <MouseParallax strength="0.01">
          <CloudOne width={177} height={121} style={{  marginLeft: '70%', marginTop: '10%' }} />
        </MouseParallax>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3}>
          <AirBalloon width={329} height={384} style={{  marginLeft: '75%', marginTop: '-6%' }} />
      </ParallaxLayer>
    </>
  )

}

export default PorfolioPageElements;