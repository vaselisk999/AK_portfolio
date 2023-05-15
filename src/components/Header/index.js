import React from "react";
import './style.css'

const HeaderComponent = () => {
    return (
        <header className="header_wrapper">
            <div className="logo_wrapper">
                <img src={require('./../../assets/logo.png')} alt="Ak" />
            </div>
            <ul>
                <li><a href="https://www.linkedin.com/in/arturkarpenko/"><img src={require('./../../assets/linkedin.png')} alt="linkedin" /></a></li>
                <li><a href={require('./../../assets/Artur Karpenko - CV.pdf')} target="_blank"><img src={require('./../../assets/cv.png')} alt="cv" /></a></li>
                <li><a href="https://github.com/vaselisk999?tab=repositories"><img src={require('./../../assets/github.png')} alt="" /></a></li>
            </ul>
        </header>
    )
}

export default HeaderComponent