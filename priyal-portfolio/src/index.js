import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/skills" component={Skills} />
            <Route path="/education" component={Education} />
            <Route path="/workEx" component={WorkExperience} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={ContactMe} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
