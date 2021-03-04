import React, {Component} from "react"
import './DataBuah.css'

class DataBuah extends Component{

    constructor(props){
        super(props)
        this.state = {
            dataBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000 },
                {nama: "Anggur", harga: 40000, berat: 500 },
                {nama: "Strawberry", harga: 30000, berat: 400 },
                {nama: "Jeruk", harga: 30000, berat: 1000 },
                {nama: "Mangga", harga: 30000, berat: 500 }
            ],
            inputName : "",
            inputHarga : "",
            inputBerat : 0,
            indexOfForm : -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete(event){
        let index = event.target.value
        let newDataBuah = this.state.dataBuah
        let editDataBuah = newDataBuah[this.state.indexOfForm]
        newDataBuah.splice(index, 1)

        if (editDataBuah !== undefined){
            var newIndex = newDataBuah.findIndex((el) => el === editDataBuah)
            this.setState({dataBuah: newDataBuah, indexOfForm: newIndex})
        
        }else{
            this.setState({dataBuah: newDataBuah})
        }
    }

    handleEdit(event){
        let index = event.target.value
        let dataBuah = this.state.dataBuah[index]
        this.setState({
            inputName: dataBuah.nama,
            inputHarga: dataBuah.harga,
            inputBerat: dataBuah.berat,
            indexOfForm: index
        })
    }

    handleChange(event){
        let typeOfInput = event.target.name
        switch(typeOfInput){
            case "name":
            {
                this.setState({inputName: event.target.value});
                break
            }
            case "harga":
            {
                this.setState({inputHarga: event.target.value});
                break
            }
            case "berat":
            {
                this.setState({inputBerat: event.target.value});
                break
            }
        default:
            {break;}
        }
    }

    handleSubmit(event){
        event.preventDefault()
         
        let nama = this.state.inputName
        let harga = this.state.inputHarga.toString()
        let berat = this.state.inputBerat

        let newDataBuah = this.state.dataBuah
        let index = this.state.indexOfForm

        if (index === -1){
            newDataBuah = [...newDataBuah, {nama, harga, berat}]
        }else{
            newDataBuah[index] = {nama, harga, berat}
        }

        this.setState({
            dataBuah: newDataBuah,
            inputName: "",
            inputHarga: "",
            inputBerat: 0,
            indexOfForm: -1
        })
    }

    render(){
        return(
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
                            this.state.dataBuah.map((val, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{val.nama}</td>
                                        <td>{val.harga}</td>
                                        <td>{val.berat/1000} Kg</td>
                                        <td>
                                            <button onClick={this.handleEdit} value={index}>Edit</button>
                                            <button onClick={this.handleDelete} value={index}>Delete</button>
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
                        <form onSubmit={this.handleSubmit}>
                            <label style={{float: "left"}}>
                                Nama: 
                            </label>
                            <input style={{float: "right"}} type="text" required name="name" value={this.state.inputName} onChange={this.handleChange}/>
                            <br/>
                            <br/>
                            <label style={{float: "left"}}>
                                Harga:
                            </label>
                            <input style={{float: "right"}} type= "text" required name= "harga" value={this.state.inputHarga} onChange={this.handleChange}/>
                            <br/>
                            <br/>
                            <label style={{float: "left"}}>
                                Berat (dalam gram):
                            </label>
                            <input style={{float: "right"}} type= "number" required name= "berat" value={this.state.inputBerat} onChange={this.handleChange}/>
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
}

export default DataBuah