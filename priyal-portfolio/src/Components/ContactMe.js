import React,{Component} from "react";
import dummyText from "../DummyText";

export default class ContactMe extends Component {
    render() {
        return (
            <div className={"contact" + (this.props.dark ? " section-dark" : "")}>
                <br/>
                <div className="main_title" align="center">
                    <h2 align="center">{this.props.title}</h2>
                </div>
                <h2 align="center">Do not forget to CONTACT ME for hiring!</h2>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
            </div>
        );
    }
}