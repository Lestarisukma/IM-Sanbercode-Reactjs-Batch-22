import React from "react"
import Navbar from "./navbar";
import Foot from "./Foot";
import { BrowserRouter as Router } from "react-router-dom";
import Section from "./Section";




const Main = () =>{
    return(
        <Router>
          <div>
            <Navbar />
            <Section />
            <Foot />
          </div>
        </Router>
      )
}

export default Main
