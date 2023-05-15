import React from "react";
import Slider from "react-slick";
import './style.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
            <img src={require('./../../assets/arrowR.png')} alt="arrowL" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
            <img src={require('./../../assets/arrowL.png')} alt="arrowL" />
        </div>
    );
}

function setOption(slides) {
    return {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: slides,
        nextArrow: <SampleNextArrow className="nextArrow" />,
        prevArrow: <SamplePrevArrow className="prevArrow" />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: slides,
                    slidesToScroll: slides,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };

}

export default function ProjectComponent({ data, showModal }) {
    return (
        <section>
            <div className="line_wrappew"></div>
            <div className="carusel_wrapper">
                <header>
                    <h3><span className="dot"></span>{data.year}</h3>
                </header>
                <Slider {...setOption(data.thumbnail_image.length < 3 ? 1 : 3)} className="carusel">
                    {
                        data.thumbnail_image && data.thumbnail_image.map((value, index) => {
                            return (
                                <div key={index+1} className="card-wrapper">
                                    <div className="card" onClick={() => { showModal(value.img) }}>
                                        <img className={data.thumbnail_image.length < 3 ? 'imag_carde' + 1: 'imag_carde' + 3} src={require('./../../assets/thumb/' + value.thumb)} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}