import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Projects from './components/projects/Projects'
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
