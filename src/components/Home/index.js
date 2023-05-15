import React from "react";
import "./style.css"

export default function HomeComponent() {
    return (
        <div className="home_wrapper">
            <div className="home_wrapper_bg">
                <header>
                </header>
                <div className="container">
                    <section className="about_me">
                        <h3>My name is <span>Artur Karpenko</span></h3>
                        <p className="midFont">A hard-working and highly motivated specialist with tech industry experience including a wide variety of project work. Able to learn new technologies fast, adapt to different teams, and communicate effectively. With extensive knowledge of betting applications, I would like the opportunity to explore other fields and use my highly transferrable skills gained through the years in a creative, developer environment.</p>
                    </section>

                    <section className="avatar_wrapper">
                        
                    </section>
                </div>
                <section className="page_title">
                    <h1>ABOUT ME</h1>
                </section>
            </div>
        </div>
    )
}

