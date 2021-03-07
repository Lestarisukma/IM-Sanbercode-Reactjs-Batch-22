import React, {useState, useEffect, useContext} from "react"
import axios from "axios"

const BoolistEdit = () =>{
    const [Bookdata, setBook] = useState(null)
    const [input, setInput] = useState({
        judul:"",
        deskripsi: "",
        ulasan: "",
        tahun: 0,
        page: 0,
        price: "",
        image: ""
    })

    useEffect(() => {
        if(Bookdata === null){
            axios.get(`http://backendexample.sanbercloud.com/api/books`)
            .then(res => {
                let data =res.data
                setBook(data.map(el => {
                    return {
                        id: el.id,
                        judul:el.judul,
                        deskripsi: el.deskripsi,
                        ulasan: el.ulasan,
                        tahun: el.tahun,
                        page: el.page,
                        price: el.price,
                        image: el.image

                    }
                }))
            },[Bookdata])
        }
    })

    return(
        <>
            <input type="text" name="search"></input>
            <button onClick={} value={}>search</button>
            <h1 style={{textAlign:"center"}}>Daftar Buku</h1>
            <table>
                <thead>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Review</th>
                    <th>Total Page</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        Bookdata !== null && Bookdata.map((item, index)=>{
                            return(
                                <tr key={index}> 
                                    <td>{index+1}</td>
                                    <td>{item.judul}</td>
                                    <td>{item.deskripsi}</td>
                                    <td>{item.ulasan}</td>
                                    <td>{item.page}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={}>Edit</button>
                                        <button onClick={}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                </tbody>
            </table>
            
            {/* FORM */}
            <h1>Books Form</h1>
            <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                <div style={{border: "1px solid #aaa", padding: "20px"}}>
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
                        <input style={{float: "right"}} type="text" required name="price" value={input.price} onChange={handleChange}/>
                        <br/>
                        <br/>
                        <label style={{float: "left"}}>
                        Berat (dalam gram):
                        </label>
                        <input style={{float: "right"}} type="number" required name="weight" value={input.weight} onChange={handleChange}/>
                        <br/>
                        <br/>
                        <div style={{width: "100%", paddingBottom: "20px"}}>
                        <button style={{ float: "right"}}>submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}