import React, { Component } from 'react'

export default class Operan extends Component {

    // gantiMakanan(makanan_baru){
    //     this.setState({
    //         makanan: makanan_baru
    //     })
    // }

    render() {
        const { makanan, gantiMakanan} = this.props
        return (
            <div>
                <h2>Operan state jadi props : {makanan}</h2>
                <button onClick={() => gantiMakanan("Mie ayam")}>ganti makanan</button>
            </div>
        )
    }
}
