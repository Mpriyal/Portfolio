import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React,{Component} from "react";

export default class WorkExperience extends Component {
    render() {
        return (
            <div className={'mx-5'}>
                <div className={"workEx" + (this.props.dark ? " section-dark" : "")}>
                                     <br/>
                                    <div className="main_title" align="center">
                                         <h2 align="center">{this.props.title}</h2>
                                     </div>
                </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#000'}}
                    // icon={<WorkIcon/>}
                >
                    <h5 className="vertical-timeline-element-title">Creative Director</h5>
                    <h6 className="vertical-timeline-element-subtitle">Miami, FL</h6>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: 'red'}}
                    // icon={<WorkIcon/>}
                >
                    <h5 className="vertical-timeline-element-title">Art Director</h5>
                    <h6 className="vertical-timeline-element-subtitle">San Francisco, CA</h6>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon/>}
                >
                    <h5 className="vertical-timeline-element-title">Web Designer</h5>
                    <h6 className="vertical-timeline-element-subtitle">Los Angeles, CA</h6>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon/>}
                >
                    <h5 className="vertical-timeline-element-title">Web Designer</h5>
                    <h6 className="vertical-timeline-element-subtitle">San Francisco, CA</h6>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    // icon={<SchoolIcon/>}
                >
                    <h5 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social
                        Media</h5>
                    <h6 className="vertical-timeline-element-subtitle">Online Course</h6>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    // icon={<SchoolIcon/>}
                >
                    <h5 className="vertical-timeline-element-title">Agile Development Scrum Master</h5>
                    <h6 className="vertical-timeline-element-subtitle">Certification</h6>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    // icon={<SchoolIcon/>}
                >
                    <h5 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media
                        Visual Imaging</h5>
                    <h6 className="vertical-timeline-element-subtitle">Bachelor Degree</h6>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        )
    }
}
