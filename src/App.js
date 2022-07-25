import React, { Component } from 'react';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
class App extends Component {
  render() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Contact />

    </div>
  );
  }
}


export default App;
