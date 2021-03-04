import React from 'react'

class ItemBuah extends React.Component{
    render(){
        return (
            <tr>
                <td>{this.props.item.no}</td>
                <td>{this.props.item.nama}</td>
                <td>{this.props.item.harga}</td>
                <td>{this.props.item.berat/1000} kg</td>
                <td>{this.props.item.aksi}</td>
            </tr>
        )
    }
}

export default ItemBuah