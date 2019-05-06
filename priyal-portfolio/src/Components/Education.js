import React,{Component} from "react";
import dummyText from "../DummyText";

export default class Education extends Component {
    render() {
        return (
          <div className={"education" + (this.props.dark ? " section-dark" : "")}>
              <h1 align="center">{this.props.title}</h1>
              <h2 align="center">Education to display soon!</h2>
              <p>{dummyText}</p>
              <p>{dummyText}</p>
          </div>
        );
    }
}