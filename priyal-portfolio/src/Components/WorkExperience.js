import React,{Component} from "react";
import dummyText from "../DummyText";

export default class WorkExperience extends Component {
    render() {
        return (
            <div className={"workEx" + (this.props.dark ? " section-dark" : "")}>
                <br/>
                <div className="main_title" align="center">
                    <h2 align="center">{this.props.title}</h2>
                </div>
                <h2 align="center">Lost of work ex to brag about coming soon!</h2>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
            </div>
        );
    }
}