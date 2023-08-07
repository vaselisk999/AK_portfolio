import React from "react";
import "./style.css"

export default function EducationComponent() {
    return (
        <section className="education_content">
            <header className="page_title">
                <h1>Education</h1>
            </header>
            <div className="container">
                <h1>Education</h1>
                <ul>
                    <li>
                        <article>
                            <h3>ITCAREERSWITCH</h3>
                            <i>March 9th, 2023 – CURRENT.</i>
                            <p><strong>Full-Stack Development course</strong></p>
                            <p>HTML5, CSS3, JavaScript, React, Python, SQL, Python, Bootstrap, jQuery, and PHP.</p>
                        </article>
                    </li>
                    <li>
                        <article>
                            <h3>EdX Skills for Life Bootcamp</h3>
                            <i>November 15th, 2022 - March 24th, 2023.</i>
                            <p><strong>Trilogy's Skills Bootcamp Front-End Web Development</strong></p>
                            <p>GitHub, Git, Jest, jQuery, React.js, JavaScript, Cascading Style Sheets (CSS), HTML5.</p>
                            <img src={require('./../../assets/bootcampL.png')} alt="ava_1" />
                        </article>
                    </li>
                </ul>
            </div>
            <br />
        </section>

    )
}