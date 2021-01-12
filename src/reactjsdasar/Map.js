import React from 'react'

const makanans = [
    {
        nama: 'Soto',
        harga: 10000
    },
    {
        nama: 'Bakso',
        harga: 15000
    },
    {
        nama: 'Mie Ayam',
        harga: 20000
    },
    {
        nama: 'Nasgor',
        harga: 25000
    }
]

//Reduce asdasd
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga
}, 0)

const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanans.map((makanan, index) => (
                    <li>{index+1}. {makanan.nama} - Harga{makanan.harga}</li>
                ))}
            </ul>

            <h2>Harga lebih dari 11.000</h2>
            <ul>
                {makanans.filter((makanan) => makanan.harga > 11000).map((makanan, index) => (
                    <li>{index+1}. {makanan.nama} - Harga{makanan.harga}</li>
                ))}
            </ul>

                <h3>Total Harga: {total_bayar}</h3>
        </div>
    )
}

export default Map
