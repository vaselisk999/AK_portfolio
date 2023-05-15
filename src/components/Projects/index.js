import React, { useEffect } from "react";
import "./style.css";
import data from "./../../data.json";
import ProjectComponent from "../Project";
import CitySVG from '../../assets/city';
import Vivus from "vivus";
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function ProjectsComponent({parallax, showModal}) {
    useEffect(() => {
        const vivus2 = new Vivus("citySVG", {
            type: 'oneByOne',
            duration: 500
        });
        vivus2.play();
        return () => {

        }
    }, []);

    return (
        <section className="projects_content">
            <header className="page_title">
                <h1>Portfolio</h1>
            </header>
            <article className="description">
                <p>Mostly works that I provided before the 2012 year and some after.
From the age of 2012 until the age of 2014, I worked for an outsourcing company, "Win Interactive", at that time the company was developing gambling games such as card games (poker, blackjack, etc.) casino games (slot machines, roulette). My duties included preparing graphics, changing the theme for games, etc. Unfortunately, I can not provide works for that period.</p>
            </article>
            <Scrollbars className="list" autoHide={true}>
                {
                    data && data.map((val, key) => {
                        return (
                            <ProjectComponent key={key} data={val} showModal={showModal} />
                        )
                    })
                }
            </Scrollbars>
            <section className="city_image_wrapper">
                <CitySVG width={919} height={154} />
            </section>

        </section>
    )
}