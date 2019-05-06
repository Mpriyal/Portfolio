import React, {Component} from "react";
import logo from "../logo.svg";
import {Link, animateScroll as scroll} from "react-scroll";

export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div id="home">
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="../../public/img/nuno.png"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="custom-toggler-icon"><i className="fas fa-bars"/></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link"
                                          activeClass="active"
                                          to="home"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                          activeClass="active"
                                          to="skills"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}>
                                        Skills
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                          activeClass="active"
                                          to="education"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}>
                                        Education
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                          activeClass="active"
                                          to="workEx"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}>
                                        Work Experience
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                          activeClass="active"
                                          to="projects"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                          activeClass="active"
                                          to="contact"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}>
                                        Contact Me
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="landing">
                    <div className="home-wrap">
                        <div className="home-inner">
                        </div>
                    </div>
                </div>
                <div className="caption center-block text-center">

                    <div className="os-animation" data-animation="bounceInUp" data-delay=".6s">
                        <h1>Hey There,</h1>
                    </div>

                    <div className="os-animation" data-animation="bounceInUp" data-delay=".8s">
                        <h3>...WELCOME TO MY WEBSITE...</h3>
                    </div>
                    {/*<div className="os-animation" data-animation="bounceInUp" data-delay="1s">*/}
                        {/*<a className="btn btn-outline-light btn-lg" href="#features">Get Started</a>*/}
                    {/*</div>*/}

                </div>
                    <Link className="down-arrow"
                          activeClass="active"
                          to="skills"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                    <div className="arrow bounce d-none d-md-block">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </div>
                </Link>

            </div>
        );
    }
}