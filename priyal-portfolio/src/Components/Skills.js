import React, {Component} from "react";
import dummyText from "../DummyText";

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <br/>
                <div className="main_title" align="center">
                <h2 align="center">{this.props.title}</h2>
                </div>
                <h2 align="center">I'll show my skills soon!</h2>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
                {/*<div className="row">*/}
                    {/*<div className="col-md-6 wow fadeInUp animated" style="visibility: visible;*/}
                    {/*animation-name: fadeInUp;">*/}
                        {/*<div class="skill_text">*/}
                            {/*<h4>Web development Skills</h4>*/}
                            {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>*/}
                        {/*</div>*/}
                        {/*<div className="skill_item_inner">*/}
                            {/*<div className="single_skill">*/}
                                {/*<h4>JavaScript</h4>*/}
                                {/*<div className="progress">*/}
                                    {/*<div className="progress-bar" role="progressbar" aria-valuenow="85"*/}
                                         {/*aria-valuemin="0" aria-valuemax="100" style="width: 90%;">*/}
                                        {/*<div className="progress_percent">*/}
                                            {/*<span className="counter">85</span>*/}
                                            {/*%*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}