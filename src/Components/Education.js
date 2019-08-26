import React,{Component} from "react";
import Paper from '@material-ui/core/Paper'
import "../index.css";

export default class Education extends Component {
    render() {
        return (
        <div className={"education" + (this.props.dark ? " section-dark my-5 container align-middle" : " my-5 mx-5 container align-middle")}>
              <div className="main_title" align="center">
                  <h2 align="center">{this.props.title}</h2>
              </div>
            <div style={{marginTop: '20px'}}>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="img-thumb wow fadeInLeft">
                        <img src="https://s3.amazonaws.com/staticwebsiteaman/neu.png"
                             style={{ boxShadow:'unset', "height" : "200px", "width": "200px"}} alt="NEU"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="wow fadeInRight">
                        <div className="row">
                        <h3><b>Northeastern University, Boston, MA</b></h3>
                            <h6 align="right">Sept. 2017 - Present </h6>
                        </div>
                        <i><h5 className="card-title">Khoury College of Computer and Information Science</h5></i>
                        <i><h6 className="card-title">Master of Science in Computer Science</h6></i>
                        <p>Related Coursework</p>
                        <li>Algorithms</li>
                        <li>Web Development</li>
                        <li>Database Management System</li>
                        <li>Large-Scale Parallel Data Processing using Map reduce</li>
                        <li>Managing Software Development</li>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="img-thumb wow fadeInLeft">
                        <img src="https://s3.amazonaws.com/staticwebsiteaman/ip.png"
                             style={{ boxShadow:'unset', "height" : "200px", "width": "225px"}} alt="IPU"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="wow fadeInRight">
                        <div className="row">
                        <h3><b>Guru Gobind Singh Indraprastha University, Delhi, India</b></h3>
                            <h6 align="right">Aug. 2012 - Jun. 2016 </h6>
                        </div>
                        <i><h5 className="card-title">Maharaja Agarsen Institute of Technology</h5></i>
                        <i><h6 className="card-title">Bachelor of Science in Information Technology</h6></i>
                        <p>Related Coursework</p>
                        <li>Object Oriented Programming</li>
                        <li>JAVA and Website Design</li>
                        <li>Database Management System</li>
                        <li>Software Engineering</li>
                        <li>Data Warehousing and Mining</li>
                        <li>Data Structures</li>

                    </div>
                </div>
            </div>
        </div>
              {/*<div className={'row'}>*/}
                  {/*/!*<div className={'col-10 offset-1'}>*!/*/}
                  {/*<Paper style={{marginLeft: '25px', width: '880px', height: '400px'}}>*/}
                      {/*/!*<div className="card  mb-3 align-middle " style={{"maxWidth": "50rem"}}>*!/*/}
                          {/*<div className="card-body">*/}
                              {/*<br/>*/}
                              {/*<h3 align="center"><b><i>Northeastern University, Boston, MA</i></b></h3><br/>*/}
                              {/*<div className={'row'}>*/}
                                  {/*<div className={'col-5'}>*/}
                                      {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/neu.png"*/}
                                           {/*style={{ boxShadow:'unset', "height" : "200px", "width": "200px"}} alt="NEU"/>*/}
                                  {/*</div>*/}
                                  {/*<div className={'col-7'}>*/}
                                      {/*<h5 className="card-title">Khoury College of Computer and Information Science</h5>*/}
                                      {/*<p>Related Coursework</p>*/}
                                      {/*<li>Algorithms</li>*/}
                                      {/*<li>Web Development</li>*/}
                                      {/*<li>Database Management System</li>*/}
                                      {/*<li>Large-Scale Parallel Data Processing using Map reduce</li>*/}
                                      {/*<li>Managing Software Development</li>*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                          {/*/!*</div>*!/*/}
                      {/*/!*</div>*!/*/}
                  {/*</div>*/}
                  {/*</Paper>*/}
              {/*</div>*/}
            {/*<br/>*/}
            {/*<div className={'row'}>*/}
                {/*/!*<div className={'col-10 offset-1'}>*!/*/}
                {/*<Paper style={{marginLeft: '25px', width: '880px', height: '400px'}}>*/}
                    {/*/!*<div className="card  mb-3 align-middle " style={{"maxWidth": "50rem"}}>*!/*/}
                    {/*<div className="card-body">*/}
                        {/*<br/>*/}
                        {/*<h3 align="center"><b><i>Guru Gobind Singh Indraprastha University, Delhi, India</i></b></h3><br/>*/}
                        {/*<div className={'row'}>*/}
                            {/*<div className={'col-5'}>*/}
                                {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/ip.png"*/}
                                     {/*style={{ boxShadow:'unset', "height" : "200px", "width": "220px"}} alt="IPU"/>*/}
                            {/*</div>*/}
                            {/*<div className={'col-7'}>*/}
                                {/*<h5 className="card-title">Maharaja Agrasen Institute of Technology, Rohini</h5>*/}
                                {/*<p>Related Coursework</p>*/}
                                {/*<li>Algorithms</li>*/}
                                {/*<li>Web Development</li>*/}
                                {/*<li>Database Management System</li>*/}
                                {/*<li>Large-Scale Parallel Data Processing using Map reduce</li>*/}
                                {/*<li>Managing Software Development</li>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*/!*</div>*!/*/}
                        {/*/!*</div>*!/*/}
                    {/*</div>*/}
                {/*</Paper>*/}
            {/*</div>*/}

              {/*<div className={'row'}>*/}
                  {/*/!*<div className={'col-10 offset-1'}>*!/*/}
                      {/*<div className="card  mb-3 align-middle" style={{"maxWidth": "50rem"}}>*/}
                          {/*<div className="card-header"><b>Guru Gobind Singh Indraprastha University. Delhi, India</b></div>*/}
                          {/*<div className="card-body">*/}
                              {/*<div className={'row'}>*/}
                                  {/*<div className={'col-5'}>*/}
                                      {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/ip.png"  style={{ "height" : "250px", "width": "250px"}} alt=""/>*/}
                                  {/*</div>*/}
                                  {/*<div className={'col-7'}>*/}
                                      {/*<h5 className="card-title">Maharaja Agarsen Institute of Technology</h5>*/}
                                      {/*<p>Related Coursework</p>*/}
                                      {/*<li>Algorithms</li>*/}
                                      {/*<li>Web Development</li>*/}
                                      {/*<li>Database Management System</li>*/}
                                      {/*<li>Large-Scale Parallel Data Processing using Map reduce</li>*/}
                                      {/*<li>Managing Software Development</li>*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                          {/*</div>*/}
                      {/*</div>*/}
                  {/*/!*</div>*!/*/}
              {/*</div>*/}
          </div>
        );
    }
}