import React from "react";
import { AvatarIamge, IconsIamge, AvatarBollSmallIamge, AvatarBollBillIamge } from './../../utils/imageLoader';
import { ParallaxLayer } from '@react-spring/parallax';
import { MouseParallax } from "react-just-parallax";

const HomepageElements = () => {
    return (
        <>
            <ParallaxLayer offset={0} speed={0.3} >
                <IconsIamge />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2} >
                <AvatarIamge />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1} >
                <AvatarBollSmallIamge />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1} >
                <AvatarBollBillIamge />
            </ParallaxLayer>
        </>
    )

}

export default HomepageElements;