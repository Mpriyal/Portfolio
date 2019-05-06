import React,{Component} from "react";
import dummyText from "../DummyText";

export default class Projects extends Component {
    render() {
        return (
            <div className={"projects" + (this.props.dark ? " section-dark" : "")}>
                <br/>
                <div className="main_title" align="center">
                    <h2 align="center">{this.props.title}</h2>
                </div>
                <h2 align="center">Projects (not all work fine) to display soon!</h2>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
            </div>
        );
    }
}