import React, {Component} from "react";
import myConstants from '../Utils/Constants';
import SkillCard from './SkillCard';
import Form from 'react-bootstrap/Form';

export default class Skills extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedValue: ""
        }
    }

    renderSkills = (type) => {
        let res = null;
        if(type === "Web Development"){
            res = myConstants.webDev;
        }
        else if(type === "Programming Languages"){
            res = myConstants.progLang;
        }
        else if(type === "Tools"){
            res = myConstants.tools;
        }
        else if(type === "Databases"){
            res = myConstants.databases;
        }
        else{
            let allRes = Object.assign( {}, myConstants.webDev, myConstants.progLang, myConstants.tools,
                myConstants.databases );
            res = allRes;
        }
        return Object.keys(res).map((key, index) => (
            <SkillCard key={index} skill={key} info={res[key]}/>
        ));
    };

    handleChange =(e)=> {
        this.setState({selectedValue: e.target.value});
    };

    render() {
                    return (
                    <div className="skills my-5 container">
                        <br/>
                        <div className="main_title" align="center">
                            <h2 align="center my-5">{this.props.title}</h2>
                        </div>
                        <br/>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" value={this.state.selectedValue}
                                              onChange={this.handleChange}>
                                    <option>All</option>
                                    <option>Programming Languages</option>
                                    <option>Tools</option>
                                    <option>Databases</option>
                                    <option>Web Development</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="container">
                            <div className="row">
                            {this.renderSkills(this.state.selectedValue)}
                            </div>
                        </div>

                        {/*<div className={'row'}>*/}
                        {/*<div className={'col-4'}>*/}
                        {/*<div className="card" style={{ "height" : "250px", "width": "250px"}}>*/}
                        {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/js.png" className="card-img-top" alt="..."/>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={'col-4'}>*/}
                        {/*<div className="card"  style={{ "height" : "250px", "width": "250px"}}>*/}
                        {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/react.png" className="card-img-top" alt="..."/>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={'col-4'}>*/}
                        {/*<div className="card" style={{ "height" : "250px", "width": "250px"}}>*/}
                        {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/node1.png" className="card-img-top" alt="..."/>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={'row'}>*/}
                        {/*<div className={'col-4'}>*/}
                        {/*<div className="card" style={{ "height" : "250px", "width": "250px"}}>*/}
                        {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/angular.png"  style={{ "height" : "250px", "width": "250px"}} className="card-img-top" alt="..."/>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={'col-4'}>*/}
                        {/*<div className="card"  style={{ "height" : "250px", "width": "250px"}}>*/}
                        {/*<img src="https://s3.amazonaws.com/staticwebsiteaman/mongo.png" className="card-img-top" alt="..."/>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    );
                    }
                    }