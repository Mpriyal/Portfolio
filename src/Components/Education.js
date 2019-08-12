import React,{Component} from "react";

export default class Education extends Component {
    render() {
        return (
        <div className={"education" + (this.props.dark ? " section-dark my-5 container align-middle" : " my-5 mx-5 container align-middle")}>
              <br/>
              <div className="main_title" align="center">
                  <h2 align="center">{this.props.title}</h2>
              </div>
              <div className={'row'}>
                  <div className={'col-10 offset-1'}>
                      <div className="card  mb-3 align-middle " style={{"maxWidth": "50rem"}}>
                          <div className="card-body">
                              <h3><b><i>Northeastern University</i></b></h3>
                              <div className={'row'}>
                                  <div className={'col-5'}>
                                      <img src="https://s3.amazonaws.com/staticwebsiteaman/neu.png"  style={{ "height" : "250px", "width": "250px"}} alt=""/>
                                  </div>
                                  <div className={'col-7'}>
                                      <h5 className="card-title">College of Computer and Information Science</h5>
                                      <p>Related Coursework</p>
                                      <li>Algorithms</li>
                                      <li>Web Development</li>
                                      <li>Database Management System</li>
                                      <li>Large-Scale Parallel Data Processing using Map reduce</li>
                                      <li>Managing Software Development</li>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={'row'}>
                  <div className={'col-10 offset-1'}>
                      <div className="card  mb-3 align-middle" style={{"maxWidth": "50rem"}}>
                          <div className="card-header"><b>Guru Gobind Singh Indraprastha University. Delhi, India</b></div>
                          <div className="card-body">
                              <div className={'row'}>
                                  <div className={'col-5'}>
                                      <img src="https://s3.amazonaws.com/staticwebsiteaman/ip.png"  style={{ "height" : "250px", "width": "250px"}} alt=""/>
                                  </div>
                                  <div className={'col-7'}>
                                      <h5 className="card-title">Maharaja Agarsen Institute of Technology</h5>
                                      <p>Related Coursework</p>
                                      <li>Algorithms</li>
                                      <li>Web Development</li>
                                      <li>Database Management System</li>
                                      <li>Large-Scale Parallel Data Processing using Map reduce</li>
                                      <li>Managing Software Development</li>
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