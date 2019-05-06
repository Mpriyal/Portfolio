import React, {Component} from "react";
import dummyText from "../DummyText";

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <br/>
                <h1 align="center">{this.props.title}</h1>
                <h2 align="center">I'll show my skills soon!</h2>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
            </div>
        );
    }
}