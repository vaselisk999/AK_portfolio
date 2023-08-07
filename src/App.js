import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeComponent from './components/Home';
import ProjectsComponent from './components/Projects';
import { PortfolioBg } from './components/Projects/PortfolioBg';
import HomepageElements from './components/Home/HomepageElements';
import PortfolioPageElements from './components/Projects/PortfolioPageElements';
import ModalWindowComponent from './components/ModalWindow';
import HeaderComponent from './components/HeaderComponent';
import EducationComponent from './components/EducationComponent';
import { EducationBackground } from './components/EducationComponent/EducationBg';

export default function App() {
  const parallax = useRef(null);
  const [imgPath, setImgPath] = useState(null);
  const [isModal, setModal] = useState(false);

  const showModal = (img) => {
    setModal(!isModal);
    setImgPath(img);
  }

  const closeModal = (e) => {
    setModal(!isModal);
    setImgPath(null);
  }

  return (
    <>
      <Router>
        <Navigation parallax={parallax} />

        <main style={{ width: '100%', height: '100%', background: '#ce8c15' }}>
          <Parallax ref={parallax} pages={3} style={{ backgroundColor: '#ce8c15', overflow: "hidden" }}>

            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <HomeComponent />
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <PortfolioBg />
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <EducationBackground/>
            </ParallaxLayer>

            <PortfolioPageElements />

            <ParallaxLayer
              offset={1}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ProjectsComponent parallax={parallax} showModal={(img)=>{showModal(img)}} />
            </ParallaxLayer>

            <HomepageElements />

            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{
              }}>
              <HeaderComponent darkMode={true}/>
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <EducationComponent />
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                width: '100%'
              }}>
              <HeaderComponent darkMode={false} />
            </ParallaxLayer>

          </Parallax>

          <ModalWindowComponent imgPath={imgPath} closeModal={()=>{closeModal()}} isModal={isModal} />
        </main>
      </Router>

    </>
  )
}
