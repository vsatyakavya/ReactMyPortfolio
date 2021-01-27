import React from "react";
import { BrowserRouter as Router, Route,Switch ,Redirect} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProjectContainer from "./components/ProjectContainer"
import Background from "./Assets/background.jpg"

import Header from "./components/Header";
import Footer from "./components/Footer"
const styles ={
  bg :{
    // backgroundImage: "url(" +  Background  + ")",
    background: "linear-gradient(#e66465, #9198e5)",
    // minHeight:"500%",
    // backgroundSize :"cover"
    

   
    // width: '100vw',
    //  height: '240vh',
// minHeight :"100%",
// minWidth :"100%",
    // backgroundPosition: "center",
    // backgroundRepeat: "repeat",
    // backgroundSize: "cover",
    // backgroundAttachment:"fixed"

  }
}
function App() {
  return (
    <Router>
      <div style= {styles.bg}>
        <Header />
        <Switch>
    <Route exact path="/" component={About} />
          {/* <Route exact path="/ReactMyPortfolio" component={About} /> */}

          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/project" component={ProjectContainer} />
           <Redirect to = "/" />
        </Switch>
        
      

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
