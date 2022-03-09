import { useState } from "react";
import { GerarPromoção } from "../../Componentes/GerarPromoção";


export const Inicio = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Smart TV LED 50", price: 1999.0 },
        { id: 2, name: "PlayStation 5", price: 12000.0 },
        { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
        { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
        { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
        { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
    ]);

    const [promocaoGerada, setPromocaoGerada] = useState([])
    // console.log(promocaoGerada)



    return (
        <>
            <h1>Home</h1>
            <GerarPromoção setPromocaoGerada={setPromocaoGerada} products={products} />
        </>
    )
}