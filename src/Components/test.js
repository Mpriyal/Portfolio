import React, {Component} from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import '../animate.css';
import '../waypoints.css';
import '../index.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';


export default class NavBar extends Component {

    state = {
        scrolled: false,
        isOpen: false
    };

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    listenScrollEvent = e => {
        if (window.scrollY > 300) {
            this.setState({scrolled: true})
        } else {
            this.setState({scrolled: false})
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        let newClassName = this.state.scrolled ? "navbar solid navbar-expand-lg fixed-top" : "navbar navbar-expand-lg fixed-top";
        return (
            <div id="home">
                <nav className={newClassName}>
                    <div className="container-fluid">
                        <Link className="navbar-brand"
                              activeClass="active"
                              to="home"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}>
                        </Link>
                        <div className="navbar-toggler dropdown" onClick={this.toggleOpen}>
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                            >
                                <span className="custom-toggler-icon"><i className="fas fa-bars"/></span>
                            </button>
                            <div className={menuClass} aria-labelledby="dropdownMenuButton"
                                 style={{marginLeft: '-70px',
                                     marginTop: '-15px',
                                     backgroundColor: '#6c757d'}}>
                                <Link className="nav-link dropdown-item"
                                      activeClass="active"
                                      to="home"
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    Home
                                </Link>
                                <Link className="nav-link dropdown-item"
                                      activeClass="active"
                                      to="about"
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    About
                                </Link>
                                <Link className="nav-link dropdown-item"
                                      activeClass="active"
                                      to="skills"
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    Skills
                                </Link>
                                <Link className="nav-link dropdown-item"
                                      activeClass="active"
                                      to="education"
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    Education
                                </Link>
                                <Link className="nav-link dropdown-item"
                                      activeClass="active"
                                      to="workEx"
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    Work Experience
                                </Link>
                                <Link className="nav-link dropdown-item"
                                      activeClass="active"
                                      to="projects"
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    Projects
                                </Link>
                                <Link className="nav-link dropdown-item"
                                      activeClass="active"
                                      to="contact"
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                        {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">*/}
                            {/*<span className="custom-toggler-icon"><i className="fas fa-bars"/></span>*/}
                        {/*</button>*/}

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
                                          to="about"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}>
                                        About
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
                        <div id='home-inner-tmp' className="home-inner">
                <div className='overlay'>
                </div>
                    <div className="caption center-block text-center">
                        <Container>
                            <Row>
                                <Col style={{marginTop: '90px'}}>
                                    <h1>Hi, I'm Priyal</h1>
                                    <h2>Software Developer</h2>
                                    <h2>ReactJS / Javascript / Python / Java</h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                        </div>
                    </div>
                </div>
                <Link className="down-arrow"
                      activeClass="active"
                      to="about"
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