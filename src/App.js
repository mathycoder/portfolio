import React, { Component } from 'react'
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import { Route, BrowserRouter as Router } from "react-router-dom";

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
            <Route exact path="/blog" component={Blog} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
