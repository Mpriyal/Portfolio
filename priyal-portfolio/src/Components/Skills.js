import React, {Component} from "react";
import dummyText from "../DummyText";

export default class Skills extends Component {
    render() {
        return (
            <div className="skills my-5 container">
                <br/>
                <div className="main_title" align="center">
                <h2 align="center my-5">{this.props.title}</h2>
                </div>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <div className="card" style={{ "height" : "250px", "width": "250px"}}>
                            <img src="https://s3.amazonaws.com/staticwebsiteaman/js.png" className="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className="card"  style={{ "height" : "250px", "width": "250px"}}>
                            <img src="https://s3.amazonaws.com/staticwebsiteaman/react.png" className="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className="card" style={{ "height" : "250px", "width": "250px"}}>
                            <img src="https://s3.amazonaws.com/staticwebsiteaman/node1.png" className="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <div className="card" style={{ "height" : "250px", "width": "250px"}}>
                            <img src="https://s3.amazonaws.com/staticwebsiteaman/angular.png"  style={{ "height" : "250px", "width": "250px"}} className="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className="card"  style={{ "height" : "250px", "width": "250px"}}>
                            <img src="https://s3.amazonaws.com/staticwebsiteaman/mongo.png" className="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}