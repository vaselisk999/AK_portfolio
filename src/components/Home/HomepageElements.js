import React from "react";
import { AvatarImage, IconsImage, AvatarBollSmallImage, AvatarBollBillImage } from './../../utils/imageLoader';
import { ParallaxLayer } from '@react-spring/parallax';

const HomepageElements = () => {
    return (
        <>
            <ParallaxLayer offset={0} speed={0.3} >
                <IconsImage />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2} >
                <AvatarImage />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1} >
                <AvatarBollSmallImage />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1} >
                <AvatarBollBillImage />
            </ParallaxLayer>
        </>
    )

}

export default HomepageElements;