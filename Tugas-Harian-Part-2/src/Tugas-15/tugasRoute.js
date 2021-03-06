import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./tugas15.css"

import FormPembelian from "../Tugas-9/formBuah";
import DaftarBuah from "../Tugas-10/DaftarBuah";
import Timer from "../Tugas-11/Timer";
import DataBuah from "../Tugas-12/DataBuah";
import HooksWithAxios from "../Tugas-13/HooksWithAxios";
import Buah from "../Tugas-14/Buah"; 
import ButtonToggleDark from "./NavbarToggle"

const Routes = () =>{
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/Tugas-9">Tugas 9</Link>
                </li>
                <li>
                  <Link to="/Tugas-10">Tugas 10</Link>
                </li>
                <li>
                  <Link to="/Tugas-11">Tugas 11</Link>
                </li>
                <li>
                  <Link to="/Tugas-12">Tugas 12</Link>
                </li>
                <li>
                  <Link to="/Tugas-13">Tugas 13</Link>
                </li>
                <li>
                  <Link to="/Tugas-14">Tugas 14</Link>
                </li>
                <li>
                  <Link to="/Tugas-15">Tugas 15</Link>
                </li>
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route  path="/Tugas-9"  component={FormPembelian}/>
              <Route  path="/Tugas-10" component={DaftarBuah}/>
              <Route  path="/Tugas-11">
                <Timer start={100} />
              </Route>
              <Router path="/Tugas-12">
                  <DataBuah />
              </Router>
              <Router path="/Tugas-13">
                  <HooksWithAxios />
              </Router>
              <Router path="/Tugas-14">
                  <Buah />
              </Router>
              <Router path="/Tugas-15">
                  <ButtonToggleDark/>
              </Router>
            </Switch>
          </div>
        </Router>
      );
}

export default Routes
