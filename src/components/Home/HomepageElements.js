import React from "react";
import { AvatarIamge } from './../../utils/imageLoader';
import { ParallaxLayer } from '@react-spring/parallax';
import { MouseParallax } from "react-just-parallax";

const HomepageElements = () => {
    return (
        <>
            <ParallaxLayer offset={0} speed={0.3} >
                <MouseParallax strength="0.03">
                    <img src={require('./../../assets/icons.png')} className="icons" style={{  marginLeft: '70%', marginTop: '5%' }} alt="icons" />
                </MouseParallax>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2} >
                <AvatarIamge />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1} >
                <MouseParallax strength="0.02">
                    <img src={require('./../../assets/ava_2.png')} className="ava_2" style={{  marginLeft: '79%', marginTop: '32%' }} alt="ava_2" />
                </MouseParallax>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1} >
                <MouseParallax strength="0.01">
                    <img src={require('./../../assets/ava_1.png')} className="ava_1" style={{  marginLeft: '79%', marginTop: '40%' }} alt="ava_1" />
                </MouseParallax>
            </ParallaxLayer>
        </>
    )

}

export default HomepageElements;