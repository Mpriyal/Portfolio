import React,{Component} from "react";
import '../../src/index.css';
import Footer from "./Footer";


export default class ContactMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            First : "New First",
            Last : "New Last",
            Subject : "Contact message from website",
            Message : "Default message sent from website"
        }
    };

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value ? e.target.value : "Default Value";
        this.setState({ [name]: value })
    };

    render() {

        return (
            <div>
            <div className={"contact" + (this.props.dark ? " section-dark my-5" : "my-5")}>
                <br/>
                <div className="main_title" align="center">
                    {/*<h2 align="center">{this.props.title}</h2>*/}
                </div>
                <form>
                    <div className="row">
                        <div className="col border p-5 m-3">
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <h5>Contact me</h5>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-6'}>
                                    <input type="text"
                                           className="form-control"
                                           name = "First"
                                           placeholder="First name"
                                           onChange = {this.handleChange}
                                    />
                                </div>
                                <div className={'col-6'}>
                                    <input type="text"
                                           className="form-control"
                                           name = "Last"
                                           placeholder="Last name"
                                           onChange = {this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <input type="text"
                                           className="form-control"
                                           name = "Subject"
                                           placeholder="Subject"
                                           onChange = {this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <textarea className="form-control"
                                              rows="4"
                                              name = "Message"
                                              placeholder="Message"
                                              onChange = {this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-12'} style={{textAlign: "center"}}>
                                    <a href={`mailto:mittal.pr@husky.neu.edu?subject=${this.state.Subject}&body=${this.state.First} ${this.state.Last} is asking ${this.state.Message}`}>
                                    <button type="button" className="btn btn-outline-primary">Send Message</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col border p-5 m-3">
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <b><h5>Contact Info</h5></b>
                                </div>
                            </div>
                            <div className="footer-right-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt">
                                    </i>
                                    </div>
                                <p>Boston, MA</p>
                                </div>
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope">
                                        </i>
                                    </div>
                                    <p>
                                        <a href="mailto:priyal.mittal@gmail.com">priyal.mittal@gmail.com</a>
                                    </p>
                                    <p>
                                        <a href="mailto:mittal.pr@husky.neu.edu">mittal.pr@husky.neu.edu</a>
                                    </p>
                                </div>
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone">
                                        </i>
                                    </div>
                                    <p>617-953-5360</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'row align-middle'}>
                        <div className={'col-10 offset-1'}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.516474062459!2d-71.10872058504042!3d42.33151084489751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3798579ea533b%3A0x75978aafec921b54!2s151+Hillside+St%2C+Boston%2C+MA+02120!5e0!3m2!1sen!2sus!4v1563928796733!5m2!1sen!2sus"
                                width="100%" height="500px" frameBorder="0" style={{"border":"0", "alignContent":"center"}} allowFullScreen />
                        </div>

                    </div>
                </form>
            </div>
                <Footer/>
            </div>
        );
    }
}