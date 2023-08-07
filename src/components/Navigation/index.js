import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './style.css'

export default function Navigation({ parallax }) {
    //assigning location variable
    const location = useLocation();
    const navigate = useNavigate();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    useEffect(() => {
        switch (splitLocation[1]) {
            case "":
                parallax.current.scrollTo(0);
                break;
            case "portfolio":
                parallax.current.scrollTo(1);
                break;
            case "education":
                parallax.current.scrollTo(2);
                break;
            default:
                parallax.current.scrollTo(0);
                break;
        }
    })
    

    return (
        <>
            <nav className="horizontal-menu">
                <ul className="menu">
                    <li onClick={()=> {navigate('/')}} className={splitLocation[1] === "" ? "active" : ""} >
                        <Link
                            to="/"
                            data-menu="Home"
                            onClick={() => parallax.current.scrollTo(0)}
                        >
                        </Link>
                    </li>
                    <li onClick={()=>{navigate('/portfolio')}} className={splitLocation[1] === "portfolio" ? "active" : ""} >
                        <Link
                            to="portfolio"
                            data-menu="Portfolio"
                            onClick={() => parallax.current.scrollTo(1)}
                        >
                        </Link>
                    </li>
                    <li onClick={()=>{navigate('/education')}} className={splitLocation[1] === "education" ? "active" : ""} >
                        <Link
                            to="education"
                            data-menu="Education"
                            onClick={() => parallax.current.scrollTo(2)}
                        >
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}