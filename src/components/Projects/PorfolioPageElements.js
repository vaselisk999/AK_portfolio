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
          <CloudThird width={108} height={85} />
        </MouseParallax>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} >
        <MouseParallax strength="0.01">
          <CloudTwo width={146} height={93}  />
        </MouseParallax>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} >
        <MouseParallax strength="0.01">
          <CloudOne width={177} height={121}  />
        </MouseParallax>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3}>
          <AirBalloon width={329} height={384} />
      </ParallaxLayer>
    </>
  )

}

export default PorfolioPageElements;