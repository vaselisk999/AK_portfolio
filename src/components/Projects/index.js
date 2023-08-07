import React, { useEffect } from "react";
import "./style.css";
import data from "./../../data.json";
import ProjectComponent from "../Project";
import CitySVG from '../../assets/city';
import Vivus from "vivus";
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function ProjectsComponent({ showModal }) {
    useEffect(() => {
        const vivus2 = new Vivus("citySVG", {
            type: 'oneByOne',
            duration: 500
        });
        vivus2.play();
    }, []);

    return (
        <section className="projects_content">
            <header className="page_title">
                <h1>Portfolio</h1>
            </header>
            <article className="description">
                <p>
                    <strong>ONSEO 2016 – 2022 (Frontend developer) - </strong>
                    Worked on a variety of projects where my duties were writing sustainable code that can be modified and scaled, interaction with designers and developers to create modern and user-friendly interfaces, working in a collaborative environment with shared code.
                </p>
                <p>
                    <strong>WIN INTERACTIVE 2012 – 2016 (Digital Designer) - </strong>
                    My duties were an assembly of roulettes for casino applications, creating banners, and preparing artistic graphics for slot machines.
                </p>
            </article>
            <Scrollbars className="list" autoHide={true}>
                {
                    data && data.map((val, key) => <ProjectComponent key={key} data={val} showModal={showModal} />)
                }
            </Scrollbars>
            <section className="city_image_wrapper">
                <CitySVG width={919} height={154} />
            </section>

        </section>
    )
}