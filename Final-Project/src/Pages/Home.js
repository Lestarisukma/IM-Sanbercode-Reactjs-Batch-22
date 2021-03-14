import React from "react"
import { Layout } from 'antd';
import axios from "axios"
import MoveList from "./Movie";
import GameList from "./Games";

const { Content } = Layout;

const BodyContent = () =>{
    return(
            <Layout style={{ padding: '0 24px 24px' }}>

              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
              <div style={{padding:"10px", paddingTop:"100px"}}>
                <h1>Upcoming Movie</h1>
                <MoveList />
              </div>
              <div style={{padding:"10px", paddingTop:"10px"}}>
                <h1>Upcoming Game</h1>
                <GameList />
              </div>
              </Content>
            </Layout>
      )
}

export default BodyContent
