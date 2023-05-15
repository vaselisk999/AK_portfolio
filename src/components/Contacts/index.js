import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function ContactComponent() {
    return (
        <section className="contacts_wrapper">
            <div>
                <h4>Contact information:</h4>
                <br/>
                <ul>
                    <li><Link to={{ pathname: "mailto:no-reply@example.com" }} target="_blank">e-mail: example@gmail.com</Link></li>
                    <li><Link to={{ pathname: "https://www.africau.edu/images/default/sample.pdf" }} target="_blank">Link to a PDF version of your CV</Link></li>
                    <li> <Link to={{ pathname: "https://github.com/vaselisk999/modern_react_portfolio" }} target="_blank">Link to your GitHub profile</Link></li>
                    <li><Link to={{ pathname: "https://www.linkedin.com/in/arturkarpenko/" }} target="_blank">Link to your LinkedIn page</Link></li>
                </ul>
            </div>
            <br/>
            <form >
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="description">Subject</label>
                <textarea id="description"></textarea>

                <input type="submit" value="Submit" />
            </form>
        </section>

    )
}