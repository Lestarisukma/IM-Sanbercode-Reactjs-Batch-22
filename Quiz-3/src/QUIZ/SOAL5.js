import React, {useState, useEffect} from "react"
import axios from "axios"

const HomeComponent = () =>{
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
            <div className="Section row">
                <h1>Daftar Buku-buku pilihan</h1>
                {
                    Bookdata !== null && Bookdata.map((item, index) => {
                        return(
                            <div className="article-list col-md-3">
                                <div className="paragraf item-buku" key={index}>

                                        {index+1}
                                        <h3>{item.judul}</h3>
                                        <img
                                            src={item.image}
                                            alt=""
                                            height="100px"
                                            width="90px"
                                        />
                                        <div className="Keterangan" style={{display:"flex"}}>
                                            <p><b>Tahun Terbit: {item.tahun} </b></p>
                                            <p><b>Harga: {item.price}</b></p>
                                            <p><b>Jumlah Halaman: {item.page}</b></p>
                                        </div>
                                        <p><b>Deskripsi : </b>{item.deskripsi}</p>
                                        <p><b>Ulasan : </b>{item.ulasan}</p>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
            <footer>
                    <h5>copyright &copy; 2020 by Sanbercode</h5>
            </footer>
        </>
    )
}

export default HomeComponent