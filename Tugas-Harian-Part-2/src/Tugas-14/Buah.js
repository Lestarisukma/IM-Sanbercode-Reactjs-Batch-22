import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahForm from "./BuahForm"
import BuahList from "./BuahList"
import "./DataBuah.css"

const Buah = () =>{
    return (
        <>
            <BuahProvider>
                <BuahList/>
                <BuahForm/>
            </BuahProvider>
        </>
    )   
 
}

export default Buah