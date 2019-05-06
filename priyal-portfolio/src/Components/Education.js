import React,{Component} from "react";
import dummyText from "../DummyText";

export default class Education extends Component {
    render() {
        return (
          <div className={"education" + (this.props.dark ? " section-dark" : "")}>
              <br/>
              <div className="main_title" align="center">
                  <h2 align="center">{this.props.title}</h2>
              </div>
              <h2 align="center">Education to display soon!</h2>
              <p>{dummyText}</p>
              <p>{dummyText}</p>
          </div>
        );
    }
}