import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeComponent from './components/Home';
import ProjectsComponent from './components/Projects';
import { ProgectBg } from './components/Projects/ProgectBg';
import HomepageElements from './components/Home/HomepageElements';
import PorfolioPageElements from './components/Projects/PorfolioPageElements';
import ModalWindowComponent from './components/ModalWindow';
import HeaderComponent from './components/Header';

export default function App() {
  const parallax = useRef(null);
  const [imgPath, setImgPath] = useState(null);

  const [isModal, setModal] = useState(false);

  const showModal = (img) => {
    setModal(!isModal);
    setImgPath(img);
  }

  const closeModal = (e) => {
    // e.stopPropagation();
    setModal(!isModal);
    setImgPath(null);
  }

  return (
    <>
      <Router>
        <Navigation parallax={parallax} />

        <main style={{ width: '100%', height: '100%', background: '#014fa2' }}>
          <Parallax ref={parallax} pages={2} style={{ backgroundColor: '#014fa2', overflow: "hidden" }}>

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
              <ProgectBg />
            </ParallaxLayer>

            <PorfolioPageElements />

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
              <HeaderComponent  />
            </ParallaxLayer>

          </Parallax>
          <ModalWindowComponent imgPath={imgPath} closeModal={()=>{closeModal()}} isModal={isModal} />
        </main>
      </Router>

    </>
  )
}
