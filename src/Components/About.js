import React,{Component} from 'react';
import ProfilePic from '../ProfilePic.JPEG';
import resume from '../Priyal_Resume_NEU.pdf';
import "../index.css";

export default class About extends Component {
    render() {
        return (
            <div className="about" style={{marginTop:'70px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="img-thumb wow fadeInLeft">
                            <img className="img-fluid" alt="Priyal Mittal" src={ProfilePic} width="400px" height="490px"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="aboutMe wow fadeInRight">
                            <h1>Hi, Guys!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <br/>
                            <h6>Name : Priyal Mittal</h6>
                            <h6>Country : USA</h6>
                            <h6>Location : Boston, MA</h6>
                            <h6>Email : mittal.pr@husky.neu.edu</h6>
                            <h6>Phone : (617) 953-5360</h6>
                                <button type="button" className="btn btn-primary">
                                    Download Resume
                                    <a href={resume} className="download"/>
                                </button>
                    </div>
                </div>
            </div>
                </div>
            </div>

        );
    }
}