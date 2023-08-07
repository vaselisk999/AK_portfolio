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

const Card = ({data, func, value, className}) => {
    return (
        <div className={className} onClick={() => { func(value.img ? value.img : value.link ) }}>
            <img className={data.length < 3 ? 'img_card' + 1 : 'img_card' + 3} src={require('./../../assets/thumb/' + value.thumb)} alt="" />
        </div>
    )
}

export default function ProjectComponent({ data, showModal }) {

    const openLink = (link) => {
        window.open(link);
    }

    const openModal = (img) => {
        showModal(img);
    }

    return (
        <section>
            <div className="line_wrapper"></div>
            <div className="carousel_wrapper">
                <header>
                    <h3><span className="dot"></span>{data.year}</h3>
                </header>
                <Slider {...setOption(data.thumbnail_image.length < 3 ? 1 : 3)} className="carousel">
                    {
                        data.thumbnail_image && data.thumbnail_image.map((value, index) => {
                            return (
                                <div key={index + 1} className="card-wrapper">
                                    {value.img ?
                                        <Card className="card" func={(img)=> {openModal(img) }} value={value} data={data.thumbnail_image}/>
                                        :
                                        <Card className="card" func={(link)=> {openLink(link) }} value={value} data={data.thumbnail_image}/>
                                    }
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}