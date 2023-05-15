import React, { useEffect, useState, useRef } from "react";
import './style.css';

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

const ModalWindowComponent = ({ isModal, closeModal, imgPath }) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const videoRef = useRef(null);

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    const getHeight = (height) => {
        if (screenSize.height < screenSize.width) {
            return height - 80;
        } else {
            return 'auto'
        }
    }
    const getWidth = (width) => {
        
        if (screenSize.height < screenSize.width) {
            return "auto";
        } else {
            return width - 80;
        }
    }

    return (
        <>
            {
                isModal ?
                    <div className="modal_bacground">
                        <span onClick={() => { closeModal() }} >x</span>
                        <section className="modal_container">
                            {
                                imgPath.includes('webm') ?
                                    <video width={getWidth(screenSize.width)} height={getHeight(screenSize.height)} ref={videoRef}

                                        controls>
                                        <source src={require('./../../assets/galery_source/' + imgPath)} type="video/mp4" />
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                    :
                                    <img src={require('./../../assets/galery_source/' + imgPath)} width={getWidth(screenSize.width)} height={getHeight(screenSize.height)} alt="galery_source" />
                            }
                        </section>
                    </div> : null
            }
        </>
    )
}

export default ModalWindowComponent;