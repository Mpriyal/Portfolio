import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/test";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import About from "./Components/About";

class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar/>
          <About
              title={"About Me"}
              dark={true}
              id={"about"}/>
          <Skills
              title={"My Skills"}
              dark={true}
              id={"skills"}/>
          <Education
              title={"Education"}
              dark={true}
              id={"education"}/>
          <WorkExperience
              title={"Work Experience"}
              dark={true}
              id={"workEx"}/>
          <Projects
              title={"Projects"}
              dark={true}
              id={"projects"}/>
          <ContactMe
              title={"Contact Me"}
              dark={true}
              id={"contact"}/>
      </div>
    );
  }
}

export default App;
