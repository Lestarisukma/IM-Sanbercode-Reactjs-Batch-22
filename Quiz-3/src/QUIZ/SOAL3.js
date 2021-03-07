import logo from "../logo.png"
import React from "react"
import "../App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import HalamanSanbercode from './SOAL2'
import About from './SOAL4'
import HomeComponent from "./SOAL5";

const Routes = () => {
    return(
        <Router>
            <div>
                    <header>
                        <nav>
                            <img className="logo" src={logo} alt="logo" width="200px" />
                            <ul>
                                <li className="li-color">
                                    <Link to="/Home">Home</Link>
                                </li>
                                <li  className="li-color"> 
                                    <Link to="/About">About</Link>
                                </li>
                                <li className="li-color">
                                    <Link to="/Login">Login</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>               
            </div>
            <Switch>
                <Route  path="/Home" component={HomeComponent}/>
                <Route  path="/About">
                    <About 
                    name="Sukmawati Dwi Lestari"
                    email="lestaridwisukma@gmail.com"
                    sistem="Windows 10"
                    gituhub="Lestarisukma"
                    telegram="lestarisukma"/>
                </Route>
                <Route  path="/SOAL2" component={HalamanSanbercode}/>
            </Switch>
        </Router>
        
    )
}

export default Routes