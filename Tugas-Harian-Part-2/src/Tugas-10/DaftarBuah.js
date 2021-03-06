import React from 'react'
import ItemBuah from './ItemBuah'

class DaftarBuah extends React.Component{
    render(){
        let DaftarHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000 },
            {nama: "Anggur", harga: 40000, berat: 500 },
            {nama: "Strawberry", harga: 30000, berat: 400 },
            {nama: "Jeruk", harga: 30000, berat: 1000 },
            {nama: "Mangga", harga: 30000, berat: 500 }
        ]

        return (
            <>
                <h1 style={{textAlign : "center"}}> Daftar Harga </h1>
                <table style={{border : "1 px solid black", width: "70%", margin:"0 auto"}}>
                    <thead style={{background: "#aaa"}}>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                    </thead>
                    <tbody style={{background : ""}}>
                        {DaftarHargaBuah.map((el, index)=> {
                            return (
                                <>
                                    <ItemBuah item={el} key={index}/>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
           
    }   
}

export default DaftarBuah