import React from "react"
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () =>{
    return(
      <>
            <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu style={{float:"right"}}theme="dark" mode="horizontal" defaultSelectedKeys={['/']}>
                <Menu.Item key="/">
                  <Link to='/'/>
                  Home
                </Menu.Item>
                <Menu.Item key="/Movie">
                  <Link to='/Movie'/>
                  Movie
                </Menu.Item>
                <Menu.Item key="/Game">
                  <Link to='/Game'/>
                  Game
                </Menu.Item>
                <Menu.Item key="/Login">
                  <Link to='/Login'/>
                  Login
                </Menu.Item>
              </Menu>
            </Header>       
      </>
      )
}

export default Navbar
