import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/NavBar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Section
            title={"Section 1"}
            subtitle={dummyText}
            dark={true}
            id={"section1"}
        />
        <Section
            title={"Section 2"}
            subtitle={dummyText}
            dark={true}
            id={"section2"}
        />
        <Section
            title={"Section 3"}
            subtitle={dummyText}
            dark={true}
            id={"section3"}
        />
        <Section
            title={"Section 4"}
            subtitle={dummyText}
            dark={true}
            id={"section4"}
        />
        <Section
            title={"Section 5"}
            subtitle={dummyText}
            dark={true}
            id={"section5"}
        />
      </div>
    );
  }
}

export default App;
