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
                            <h1 align="center">Hi, Guys!</h1><br/>
                            <p>
                                • An Engineer with a passion to use science to find and develop better practical solutions.
                                I am a Graduate student pursuing Masters in Computer Science from Northeastern University, Boston.
                                I recently completed my internship with Suffolk Construction as a Software Engineer Co-op.
                                At Suffolk, I was primarily focused on developing input flows in JAVA to ingest data from disparate silos into a Data Hub managed in a NoSQL database, MarkLogic.
                                I also worked on harmonizing the data as per business requirements and developing RESTful web services to access the required data from MarkLogic.
                                Apart from that, I also worked on designing and developing a web application to create organization charts to record the company's employee hierarchy using ReactJS and Redux.
                            </p>
                                <p>
                                    • On the non-academic front, I am a trained dancer in the Indian classical dance forms: Kathak and Bharatnatayam.
                                I love to explore my horizons and believe that one should focus on their desires and not upon their fears!!

                            </p>
                            <br/>
                                <div className='row'>
                                <div className='col-3'>
                                    <h6>Name</h6>
                                    <h6>Email</h6>
                                    <h6>Location</h6>
                                    <h6>Country</h6>
                                    <h6>Phone</h6>
                                </div>
                                <div className='col-3'>
                                    <h6>:</h6>
                                    <h6>:</h6>
                                    <h6>:</h6>
                                    <h6>:</h6>
                                    <h6>:</h6>
                                </div>
                                    <div className='col-6'>
                                        <h6>Priyal Mittal</h6>
                                        <h6>mittal.pr@husky.neu.edu</h6>
                                        <h6>Boston, MA</h6>
                                        <h6>USA</h6>
                                        <h6>+1(617) 953-5360</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-12'} style={{textAlign: "center"}}>
                                        <a href={resume} className="download">
                                            <button type="button" className="btn btn-outline-primary">
                                            Download Resume
                                            </button>
                                        </a>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
                </div>
            </div>

        );
    }
}