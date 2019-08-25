import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SimpleLineIcon from 'react-simple-line-icons';
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
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan. 2019 - Present"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#000', alignContent: 'center'}}
                    icon={<SimpleLineIcon name="bulb"/>}
                >
                    <i><h5 className="vertical-timeline-element-title">Software Engineer Co-op</h5></i>
                    <h6 className="vertical-timeline-element-subtitle">Suffolk Construction - Boston, MA</h6>
                    <p>
                        • Designed and developed a tool using ReactJS, REST-XQuery and MarkLogic for the HR team to
                        create/modify organizational charts for laying out the company's employee hierarchy<br/>
                        • The tool reduced the chart creation time by upto 70%.<br/>
                        • Built RESTful web services, using Rest-XQuery and MarkLogic for an in-company search engine.<br/>
                        • Developed custom input flows in JAVA for automatic ingestion of data from disparate silos into a Data Hub in MarkLogic.<br/>
                        • Created jobs for bulk manipulation and re-processing of data using CoRB, a JAVA tool.<br/>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept. - Dec. 2018"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: 'red'}}
                    icon={<SimpleLineIcon name="bulb"/>}
                >
                    <i><h5 className="vertical-timeline-element-title">Graduate Teaching Assistant - CS1100</h5></i>
                    <h6 className="vertical-timeline-element-subtitle">Northeastern University - Boston, MA</h6>
                    <p>
                        • Assisted faculty members in developing teaching materials, and grading assignments and exams.
                        • Helped students comprehend the concepts associated with the course CS1100 - Computer Science
                        and its Applications.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan. - May 2018"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<SimpleLineIcon name="bulb"/>}
                >
                    <i><h5 className="vertical-timeline-element-title">Graduate Teaching Assistant - CS3200</h5></i>
                    <h6 className="vertical-timeline-element-subtitle">Northeastern University - Boston, MA</h6>
                    <p>
                        • Assisted faculty members in developing teaching materials, and grading assignments and exams.
                        • Helped students comprehend the concepts associated with the respective course CS3200 - Database Design.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan. - May 2017"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<SimpleLineIcon name="bulb"/>}
                >
                    <i><h5 className="vertical-timeline-element-title">Associate Software Engineer</h5></i>
                    <h6 className="vertical-timeline-element-subtitle">Accenture Solutions Pvt. Ltd. - Delhi, India</h6>
                    <p>
                        • Retrieved information for bulk data analysis from an operational data store by executing
                        SQL queries using Oracle SQL Developer tool. Also reported on milestones of the Agile based
                        project and its key performance indicators.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
            </div>
        )
    }
}
