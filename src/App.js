import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";

import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Header />
        
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/project" component={Project} />

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
