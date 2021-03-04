import React, {useState, useEffect} from "react"
import axios from "axios"
import './DataBuah.css'

const HooksWithAxios = () =>{
    const [dataBuah, setdataBuah] = useState(null);
    const [input, setInput] = useState({name: "", price: "", weight:0});
    const [currentId, setCurrentId] = useState(null);

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
        axios.get(` http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res =>{
            let data = res.data
            setInput(data.input)
            setCurrentId(data.id)
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        let id = input.currentId

        if(id == null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, 
            {name: input.name, price: input.price, weight: input.weight})
            .then(res =>{
                let data = res.data
                let newDataBuah = dataBuah.filter(el => {return el.id !== id})
                setdataBuah([...newDataBuah, {name: data.name, price: data.price, weight: data.weight}])
            })
        }else{
            axios.put(` http://backendexample.sanbercloud.com/api/fruits/${id}`, {name: input.name, price: input.price, weight: input.weight})
            .then(() =>{
                let newDataBuah = dataBuah.filter(el => {return el.id !== id})
                newDataBuah.name = input.name
                newDataBuah.price = input.price
                newDataBuah.wight = input.weight


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
    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        axios.delete(` http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(() => {
            let newDataBuah = dataBuah.filter(el=> {return el.id !== idBuah})
            let editDataBuah = dataBuah[currentId]

            if(editDataBuah !== undefined){
                let newIndex = dataBuah.findIndex((el) => el === editDataBuah)
                setdataBuah(newDataBuah)
                setCurrentId(newIndex)
            }else{
                setdataBuah(newDataBuah)
            }
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
                            dataBuah.map((val, index) => {
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