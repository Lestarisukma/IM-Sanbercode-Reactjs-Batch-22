import React, { useEffect, useContext} from "react"
import axios from "axios"
import { BuahContext } from "./BuahContext"
import './DataBuah.css'

const BuahList = () =>{
    const [dataBuah, setdataBuah, currentId, setCurrentId] = useContext(BuahContext) 
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
        setdataBuah({...dataBuah})
        setCurrentId(idBuah)
    }
 
    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(() => {
            let newDataBuah = dataBuah.filter(el=> {return el.id !== idBuah})
            setdataBuah(newDataBuah)
        })
         if(currentId !== idBuah){ 
            setCurrentId(null)          
        }
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
        </>
    )

}

export default BuahList