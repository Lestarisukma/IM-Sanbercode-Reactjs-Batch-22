import React, {useState, useEffect} from "react"
import axios from "axios"
import './DataBuah.css'

const HooksWithAxios = () =>{
    const [dataBuah, setdataBuah] = useState(null);
    const [input, setInput] = useState({name: "", price: "", weight:0, id: null});

    useEffect( () => {
        if (dataBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                let data = res.data
                setdataBuah(data.map(el => {
                    return {
                        id: el.id,
                        name: el.name,
                        price: el.price,
                        weight: el.weight
                    }
                }))
            }, [dataBuah])
        }
    })

    const handleEdit = (event) =>{
        let idBuah = parseInt(event.target.value)
        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res =>{
            let data = res.data
            setInput({name: data.name, price: data.price, weight: data.weight, id: idBuah})
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()

        if(input.id == null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, 
            {name: input.name, price: input.price, weight: input.weight})
            .then(res =>{
                setdataBuah([...dataBuah, {id: res.data.id, name: input.name, price: input.price, weight: input.weight}])
            })
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name: input.name, price: input.price, weight: input.weight})
            .then(() =>{
                let newDataBuah = dataBuah.find(el => {return el.id !== input.id})
                newDataBuah.name = input.name
                newDataBuah.price = input.price.toString()
                newDataBuah.wight = input.weight
                setdataBuah([...dataBuah])

            })

        }
        setInput({name: "", price: "", weight:0, id: null})
 
    }
    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        switch(typeOfInput){
            case "name":
            {
                setInput({...input, name: event.target.value})
                break;
            }
            case "price":
            {
                setInput({...input, price: event.target.value})
                break;
            }
            case "wight":
            {
                setInput({...input, weight: event.target.value})
                break;
            }
        default:
            {break;}
            
        }
       
    }
    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)

        if (idBuah === input.id){
        setInput({...input, id: null})
        }

        let newDataBuah = dataBuah.filter(el => el.id !== idBuah)
        setdataBuah([...newDataBuah])
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            console.log(res)
        })


    }
    

    return (
        <>
            <h1>Daftar Harga Buah</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataBuah !== null && dataBuah.map((val, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.price}</td>
                                        <td>{val.weight/1000} Kg</td>
                                        <td>
                                            <button onClick={handleEdit} value={val.id}>Edit</button>
                                            <button onClick={handleDelete} value={val.id}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

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


export default HooksWithAxios