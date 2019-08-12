import React,{Component} from 'react';

export default class SkillCard extends Component {

    render() {
        return (
            <li className="list-group-item">
                <img alt="skill-logo" src={this.props.info[0]}/>
                <h4>{this.props.skill}</h4>
                <h6>{this.props.info[1]}</h6>
            </li>
        )
    }
}