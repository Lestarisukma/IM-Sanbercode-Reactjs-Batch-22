import React from "react"
import { Layout, Menu} from 'antd';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GameList from "../Pages/Games";
import BodyContent from "../Pages/Home";
import MoveList from "../Pages/Movie";
const { Header } = Layout;

const Navbar = () =>{
    return(
        <Layout >
          <Router>
            <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu style={{float: "right"}} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/Movie">Movie</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/Games">Games</Link>
                </Menu.Item>
                <Menu.Item key="4">Login</Menu.Item>
              </Menu>
            </Header>
            <Switch>
                <Route path="/" component={BodyContent} />
                <Route path="/Movie" component={MoveList}/>
                <Route path="/Games" component={GameList}/>
                <Route path="/Login" component={BodyContent}/>
            </Switch>
        </Router>
        </Layout>
      )
}

export default Navbar
