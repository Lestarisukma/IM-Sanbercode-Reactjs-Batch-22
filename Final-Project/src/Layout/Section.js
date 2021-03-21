import React, {useContext} from "react"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import GameList from "../Pages/Games";
import BodyContent from "../Pages/Home";
import LoginForm from "../Pages/LoginForm";
import MovieList from "../Pages/Movie";
// import {UserContext} from "../Context/UserContext"



const Section = () =>{

  // const [, user] = useContext(UserContext);

  // const PrivateRoute = ({user, ...props }) => {
  //   if (user) {
  //     return <Route {...props} />;
  //   } else {
  //     return <Redirect to="/login" />;
  //   }
  // // };

  // const LoginRoute = ({user, ...props }) =>
  // user ? <Redirect to="/" /> : <Route {...props} />;

  return(    
    <section >
        <Switch>
            <Route path="/" component={BodyContent} />
            <Route path="/Movie">
                <MovieList />
            </Route>
            <Route path="/Games" >
                <GameList />
            </Route>
            <Route path="/Login" >
                <LoginForm />
            </Route>
        </Switch>
    </section>
  )
}

export default Section
