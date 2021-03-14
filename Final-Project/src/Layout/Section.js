import React, {useContext} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import GameList from "../Pages/Games";
import BodyContent from "../Pages/Home";
import MoveList from "../Pages/Movie";

const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" component={BodyContent} />
                <Route path="/Movie" component={MoveList}/>
                <Route path="/Games" component={GameList}/>
                <Route path="/Login" component={BodyContent}/>
            </Switch>
        </Router>
    )
}

export default Routers 
  
  