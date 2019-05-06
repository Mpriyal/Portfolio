import React, { Component } from 'react';
import './App.css';
import Test from "./Components/test";
import NavBar from "./Components/NavBar";
import Section from "./Components/Section";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

class App extends Component {

  render() {
      // const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)
    return (
      <div className="App">
          <Test/>
        {/*<NavBar/>*/}
          <Skills
              title={"Skills"}
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
