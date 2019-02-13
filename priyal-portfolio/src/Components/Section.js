import React, {Component} from "react";

export default class Section extends Component {
    render() {
        return (
            <div className={"section" + (this.props.dark ? " section-dark" : "")}>
                <div className="section-content" id={this.props.id}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle}</p>
                </div>
            </div>
        );
    }
}