import React,{Component} from 'react';
import SimpleLineIcon from 'react-simple-line-icons';
import "../index.css";

export default class Footer extends Component {
    render() {
    return (
        <div>
        <footer className="footer-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-text text-center">
                            <ul className="social-icon wow fadeInUp">
                                <li>
                                    <a className="linkedin" href="https://www.linkedin.com/in/priyal-mittal-98704593/">
                                        <SimpleLineIcon className="icon-social-linkedin" style={{'padding':'5px'}}/>
                                    </a>
                                </li>
                                <li>
                                    <a className="github" href="https://github.com/Mpriyal">
                                        <SimpleLineIcon className="icon-social-github" style={{'padding':'7px'}}/>
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="https://twitter.com/PriyalMittal">
                                        <SimpleLineIcon className="icon-social-twitter" style={{'padding':'8px'}}/>
                                    </a>
                                </li>
                                <li>
                                    <a className="instagram" href="https://www.instagram.com/priyal.mittal/">
                                        <SimpleLineIcon className="icon-social-instagram" style={{'padding':'7px'}}/>
                                    </a>
                                </li>
                                <li>
                                    <a className="facebook" href="https://www.facebook.com/priyal.mittal">
                                        <SimpleLineIcon className="icon-social-facebook" style={{'padding':'7px'}}/>
                                    </a>
                                </li>
                            </ul>
                            <p> Designed by Priyal Mittal</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>

    );
    }
}