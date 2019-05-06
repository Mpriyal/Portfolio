import React,{Component} from "react";
import dummyText from "../DummyText";

export default class Projects extends Component {
    render() {
        return (
            <div className={"projects" + (this.props.dark ? " section-dark" : "")}>
                <h1 align="center">{this.props.title}</h1>
                <h2 align="center">Projects (not all work fine) to display soon!</h2>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
            </div>
        );
    }
}