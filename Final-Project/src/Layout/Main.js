import React from "react"
import { Layout } from 'antd';
import Navbar from "./navbar";
import Foot from "./Foot";
import Section from './Section'
import BodyContent from "../Pages/Home";


const Main = () =>{
    return(
        <Layout className="layout">
          <Navbar />
          <BodyContent />
         {/*  <Section /> */}
          <Foot />
        </Layout>
      )
}

export default Main
