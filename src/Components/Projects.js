import React,{Component} from "react";
import ProjectCard from './ProjectCard';

// Use Material UI complex interaction card
export default class Projects extends Component {
    render() {
        return (
            <div className={"projects" + (this.props.dark ? " section-dark my-5 mx-5" : "my-5 mx-5")}>
                <br/>
                <div className="main_title my-5" align="center">
                    <h2 align="center">{this.props.title}</h2>
                </div>
                <ProjectCard/>
            </div>
        );
    }
}