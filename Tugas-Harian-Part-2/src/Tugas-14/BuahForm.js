import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import {BuahContext} from './BuahContext' 
import './DataBuah.css'

const BuahForm = () =>{
    const [dataBuah, setdataBuah, currentId] = useContext(BuahContext) 
    const [input, setInput] = useState({name: "", price: "", weight:0});
    
    useEffect( () => {
        if (currentId !== null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits/${currentId}`)
            .then(res =>{
                let data = res.data  
                setInput({name: data.name, price : data.price,weight: data.weight })  
            })
        }
    }, [currentId])


    const handleSubmit = (event) =>{
        event.preventDefault()

        let id = input.currentId

        if(id == null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, 
            {name: input.name, price: input.price, weight: input.weight})
            .then(res =>{
                let data = res.data
                setdataBuah([...dataBuah, {name: data.name, price: data.price, weight: data.weight}])
            })
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${id}`, {name: input.name, price: input.price, weight: input.weight})
            .then(() =>{
                setdataBuah(null)
            })

        }
        setInput({name: "", price: "", weight:0, currentId: null})
 
    }

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        let value = event.target.value
        switch(typeOfInput){
            case "name":
            {
                setInput({...input, name: value})
                break;
            }
            case "price":
            {
                setInput({...input, price: value})
                break;
            }
            case "wight":
            {
                setInput({...input, weight: value})
                break;
            }
        default:
            {break;}
            
        }
    }

    return(
        <>
            {/* Form */}
            <h1>Form Daftar Harga Buah</h1>
                <div style={{width: "50%", margin: "0 auto", display: 'block'}}>
                    <div style={{border: "1px solid", padding: "20px"}}>
                        <form onSubmit={handleSubmit}>
                            <label style={{float: "left"}}>
                                Nama: 
                            </label>
                            <input style={{float: "right"}} type="text" required name="name" value={input.name} onChange={handleChange}/>
                            <br/>
                            <br/>
                            <label style={{float: "left"}}>
                                Harga:
                            </label>
                            <input style={{float: "right"}} type= "text" required name= "harga" value={input.price} onChange={handleChange}/>
                            <br/>
                            <br/>
                            <label style={{float: "left"}}>
                                Berat (dalam gram):
                            </label>
                            <input style={{float: "right"}} type= "number" required name= "berat" value={input.weight} onChange={handleChange}/>
                            <br/>
                            <br/>
                            <div style={{width: "100%", paddingBottom: "20px"}}>
                                <button style={{float: "right"}}>submit</button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default BuahForm