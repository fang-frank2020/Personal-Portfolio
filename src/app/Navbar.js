"use client";
import Navitem from './Navitem';
import Link from 'next/link';
import Head from 'next/head';
import "./dist/hamburgers.css";
import { useState } from "react";



export default function Navbar() {
    const [active, setActive] = useState(false);
    
    function hamburgerClicked() {
        setActive(!active);
    }

    function activateSideBar() {
        return(
            <div className="SideBarItems">
                <div className="SideItem">
                    <p>Home</p>
                </div>
                <div className="SideItem">
                    <p>Projects</p>
                </div>
                <div className="SideItem">
                    <p>Experience</p>
                </div>
                <div className="SideItem">
                    <p>Experience</p>
                </div>
                <div className="SideItem">
                    <a href="https://www.linkedin.com/in/frank-fang-b7a20b21a/">Linkedin</a>
                </div>
            </div>
        )
    }
    return(
        <div>
            <Head>
                <link href="dist/hamburgers.css" rel="stylesheet"></link>
            </Head>
            <div className="NavBar">
                <div className="Name">
                    <Link className="MeLink" href="/">Frank Fang</Link>
                </div>
                <div className="NavRest">
                    <Navitem text="About"/>
                    <Navitem text="Experience"/>
                    <Navitem text="Projects"/>
                    <div className="Linkedin">
                        <a className="LinkedinLink" href="https://www.linkedin.com/in/frank-fang-b7a20b21a/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="SideBar">
                <button className= {active ? "hamburger hamburger--spring is-active" : "hamburger hamburger--spring"} type="button" onClick={() => hamburgerClicked()}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                {active ? activateSideBar() : ""}
            </div>
        </div>
    )
}