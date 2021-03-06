import React, {Component} from "react";
import logo from "../logo.svg";
import {Link, animateScroll as scroll} from "react-scroll";

export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
        <nav className="nav" id="navbar">
                <div className="nav-content">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo."
                        onClick={this.scrollToTop}
                    />
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="/about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="/skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="/education"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="workEx"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Work Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}