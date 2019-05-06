import React,{Component} from "react";
import dummyText from "../DummyText";

export default class WorkExperience extends Component {
    render() {
        return (
            <div className={"workEx" + (this.props.dark ? " section-dark" : "")}>
                <br/>
                <h1 align="center">{this.props.title}</h1>
                <h2 align="center">Lost of work ex to brag about coming soon!</h2>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
            </div>
        );
    }
}