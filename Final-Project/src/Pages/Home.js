import React from "react"
import { Layout } from 'antd';
import MoveList from "./Movie";
import GameList from "./Games";
import LoginForm from './LoginForm';

const { Content } = Layout;

const BodyContent = () =>{
    return(
            <Layout style={{ padding: '0 24px 24px' }}>

              <Content>
                <div style={{padding:"10px", paddingTop:"100px"}}>
                  <h1>Upcoming Movie</h1>
                  <MoveList />
                </div>
                <div style={{padding:"10px", paddingTop:"100px"}}>
                  <h1>Upcoming Game</h1>
                  <GameList />
                </div>
              </Content>            
            </Layout>
      )
}

export default BodyContent
